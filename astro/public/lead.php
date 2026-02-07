<?php
declare(strict_types=1);

// Данные авторизации
$TELEGRAM_BOT_TOKEN = '7752952077:AAFE1Bs2Ru_HhkHjBJz2s1UxwSj0s_IgO_8';
$TELEGRAM_CHAT_ID = '265739915';
$PARTNER_API_URL = 'https://rest.rasozvezdie.ru/partner/api/orders';
$PARTNER_API_TOKEN = 'cf159936c20fa886c56d3a816c5b61ae2d3bcd43b87744d5b7e62a3bc8ff8e43fbfde00e77805165';
$PARTNER_API_ENABLED = true;

header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['error' => 'Method not allowed']);
  exit;
}

// Сбор данных из POST
$phoneRaw = $_POST['phone'] ?? '';
$phoneDigits = preg_replace('/
D+/', '', (string)$phoneRaw);
$name = trim((string)($_POST['name'] ?? ''));
$repairType = trim((string)($_POST['repairType'] ?? ''));
$replyTo = trim((string)($_POST['replyTo'] ?? ''));
$method = trim((string)($_POST['method'] ?? ''));
$messageText = trim((string)($_POST['message'] ?? ''));
$ymClientId = trim((string)($_POST['ym_client_id'] ?? ''));
$ymUserId = trim((string)($_POST['ym_user_id'] ?? ''));

// Форматирование телефона для CRM (в документации 10 цифр: 4951234567)
$phoneForCRM = $phoneDigits;
if (strlen($phoneForCRM) === 11 && ($phoneForCRM[0] === '7' || $phoneForCRM[0] === '8')) {
  $phoneForCRM = substr($phoneForCRM, 1);
}

// Форматирование телефона для Telegram (11 цифр для удобства набора)
$phoneForTG = $phoneDigits;
if (strlen($phoneForTG) === 10) {
  $phoneForTG = '7' . $phoneForTG;
} elseif (strlen($phoneForTG) === 11 && $phoneForTG[0] === '8') {
  $phoneForTG = '7' . substr($phoneForTG, 1);
}

if ($phoneForCRM === '') {
  http_response_code(400);
  echo json_encode(['phone' => ['Это поле обязательно.']]);
  exit;
}

$host = $_SERVER['HTTP_HOST'] ?? 'remont-sanuzlov.ru';
$host = preg_replace('/:
D+$/', '', $host); // Убираем порт если есть
$remoteIp = $_SERVER['REMOTE_ADDR'] ?? '';
$timestamp = date('c');

// --- PARTNER API LOGIC ---
$crmStatus = 'SKIPPED';

if ($PARTNER_API_ENABLED && $PARTNER_API_URL !== '') {
  $partnerLines = [];
  if ($repairType !== '') $partnerLines[] = "Тип ремонта: {$repairType}";
  $contactMethod = $replyTo !== '' ? $replyTo : $method;
  if ($contactMethod !== '') $partnerLines[] = "Способ связи: {$contactMethod}";
  if ($name !== '') $partnerLines[] = "Имя: {$name}";
  
  $partnerMessage = $partnerLines ? implode('; ', $partnerLines) : 'Заявка с сайта';

  $partnerPayload = http_build_query([
    'phone' => $phoneForCRM,
    'message' => $partnerMessage,
    'host' => $host,
    'remote_ip' => $remoteIp,
  ], '', '&', PHP_QUERY_RFC3986);

  $partnerHeaders = [
    'Content-Type: application/x-www-form-urlencoded',
    'Authorization: Token ' . $PARTNER_API_TOKEN,
  ];

  if (function_exists('curl_init')) {
    $partnerCh = curl_init($PARTNER_API_URL);
    curl_setopt($partnerCh, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($partnerCh, CURLOPT_POST, true);
    curl_setopt($partnerCh, CURLOPT_HTTPHEADER, $partnerHeaders);
    curl_setopt($partnerCh, CURLOPT_POSTFIELDS, $partnerPayload);
    curl_setopt($partnerCh, CURLOPT_TIMEOUT, 15);
    
    $partnerResponse = curl_exec($partnerCh);
    $partnerCode = (int)curl_getinfo($partnerCh, CURLINFO_HTTP_CODE);
    $partnerError = curl_error($partnerCh);
    curl_close($partnerCh);

    if ($partnerResponse !== false && $partnerCode >= 200 && $partnerCode < 300) {
      $crmStatus = "OK ({$partnerCode})";
    } else {
      $errorDetail = $partnerError ?: "HTTP {$partnerCode}";
      $respSnippet = $partnerResponse ? mb_substr(strip_tags((string)$partnerResponse), 0, 150) : '';
      $crmStatus = "FAIL: {$errorDetail}" . ($respSnippet ? " ({$respSnippet})" : "");
    }
  } else {
    $partnerContext = stream_context_create([
      'http' => [
        'method' => 'POST',
        'header' => implode("\r\n", $partnerHeaders),
        'content' => $partnerPayload,
        'timeout' => 15,
        'ignore_errors' => true
      ],
    ]);
    $partnerResponse = @file_get_contents($PARTNER_API_URL, false, $partnerContext);
    
    if ($partnerResponse !== false) {
       $statusLine = $http_response_header[0] ?? '';
       if (preg_match('/HTTP\/\d+\.\d+\s+(\d+)/', $statusLine, $matches)) {
           $code = (int)$matches[1];
           if ($code >= 200 && $code < 300) {
               $crmStatus = "OK ({$code})";
           } else {
               $respSnippet = mb_substr(strip_tags((string)$partnerResponse), 0, 150);
               $crmStatus = "FAIL: HTTP {$code} ({$respSnippet})";
           }
       }
    } else {
      $crmStatus = "FAIL (Stream Error)";
    }
  }
}

// --- TELEGRAM LOGIC ---

$lines = [
  'Новая заявка',
  "Телефон: {$phoneForTG}",
];

if ($ymClientId !== '') $lines[] = "YM ClientID: {$ymClientId}";
if ($messageText !== '') $lines[] = "Сообщение: {$messageText}";
$lines[] = "Сайт: {$host}";
if ($remoteIp !== '') $lines[] = "IP: {$remoteIp}";
$lines[] = "Время: {$timestamp}";
$lines[] = "CRM: {$crmStatus}";

$payload = http_build_query([
  'chat_id' => $TELEGRAM_CHAT_ID,
  'text' => implode("\n", $lines),
], '', '&', PHP_QUERY_RFC3986);

$url = 'https://api.telegram.org/bot' . $TELEGRAM_BOT_TOKEN . '/sendMessage';
$headers = ['Content-Type: application/x-www-form-urlencoded'];

if (function_exists('curl_init')) {
  $ch = curl_init($url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_POST, true);
  curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
  curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
  curl_setopt($ch, CURLOPT_TIMEOUT, 15);
  $responseBody = curl_exec($ch);
  $responseCode = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
  curl_close($ch);
  http_response_code($responseCode);
  echo $responseBody;
} else {
  $context = stream_context_create([
    'http' => [
      'method' => 'POST',
      'header' => implode("\r\n", $headers),
      'content' => $payload,
      'timeout' => 15,
    ],
  ]);
  $responseBody = @file_get_contents($url, false, $context);
  echo $responseBody;
}