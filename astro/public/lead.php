<?php
declare(strict_types=1);

// TODO: заполните реальные значения.
$TELEGRAM_BOT_TOKEN = '7752952077:AAFE1Bs2Ru_HhkHjBJz2s1UxwSj0s_IgO_8';
$TELEGRAM_CHAT_ID = '265739915';

header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['error' => 'Method not allowed']);
  exit;
}

$phoneRaw = $_POST['phone'] ?? '';
$phone = preg_replace('/\D+/', '', (string)$phoneRaw);
$message = trim((string)($_POST['message'] ?? ''));
$ymClientId = trim((string)($_POST['ym_client_id'] ?? ''));
$ymUserId = trim((string)($_POST['ym_user_id'] ?? ''));

if ($phone === '') {
  http_response_code(400);
  echo json_encode(['phone' => ['Это поле обязательно.']]);
  exit;
}

if ($TELEGRAM_BOT_TOKEN === '' || $TELEGRAM_CHAT_ID === '') {
  http_response_code(500);
  echo json_encode(['error' => 'Telegram credentials are not configured']);
  exit;
}

$host = $_SERVER['HTTP_HOST'] ?? '';
$remoteIp = $_SERVER['REMOTE_ADDR'] ?? '';
$timestamp = date('c');

$lines = [
  'Новая заявка',
  "Телефон: {$phone}",
];

if ($ymClientId !== '') {
  $lines[] = "YM ClientID: {$ymClientId}";
}
if ($ymUserId !== '') {
  $lines[] = "YM UserID: {$ymUserId}";
}
if ($message !== '') {
  $lines[] = "Сообщение: {$message}";
}
if ($host !== '') {
  $lines[] = "Сайт: {$host}";
}
if ($remoteIp !== '') {
  $lines[] = "IP: {$remoteIp}";
}
if ($timestamp !== '') {
  $lines[] = "Время: {$timestamp}";
}

$payload = http_build_query([
  'chat_id' => $TELEGRAM_CHAT_ID,
  'text' => implode("\n", $lines),
], '', '&', PHP_QUERY_RFC3986);

$url = 'https://api.telegram.org/bot' . $TELEGRAM_BOT_TOKEN . '/sendMessage';
$headers = [
  'Content-Type: application/x-www-form-urlencoded',
];

if (function_exists('curl_init')) {
  $ch = curl_init($url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_POST, true);
  curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
  curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
  curl_setopt($ch, CURLOPT_TIMEOUT, 15);

  $responseBody = curl_exec($ch);
  $responseCode = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
  $curlError = curl_error($ch);
  curl_close($ch);

  if ($responseBody === false) {
    http_response_code(502);
    echo json_encode(['error' => $curlError ?: 'Ошибка отправки запроса']);
    exit;
  }

  http_response_code($responseCode);
  echo $responseBody;
  exit;
}

$context = stream_context_create([
  'http' => [
    'method' => 'POST',
    'header' => implode("\r\n", $headers),
    'content' => $payload,
    'timeout' => 15,
  ],
]);

$responseBody = @file_get_contents($url, false, $context);
if ($responseBody === false) {
  http_response_code(502);
  echo json_encode(['error' => 'Ошибка отправки запроса']);
  exit;
}

$statusLine = $http_response_header[0] ?? '';
if (preg_match('/HTTP\\/\\d+\\.\\d+\\s+(\\d+)/', $statusLine, $matches)) {
  http_response_code((int)$matches[1]);
}

echo $responseBody;
