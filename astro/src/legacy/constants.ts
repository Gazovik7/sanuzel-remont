export const COMPANY_PHONE = '8 (495) 137-52-39';
export const COMPANY_PHONE_TEL = '+74951375239';
export const COMPANY_ADDRESS = 'г. Москва, Большой Саввинский пер., 9С1';
export const COMPANY_EMAIL = 'info@remont-sanuzlov.ru';
export const COMPANY_LOGO = '/img/logo.png';

export const formatPhone = (value: string): string => {
  const input = value.replace(/\D/g, '');
  if (!input) return '';

  if (['7', '8', '9'].includes(input[0])) {
    let nums = input;
    if (input[0] === '9') nums = '7' + input;
    if (input[0] === '8') nums = '7' + input.slice(1);

    let res = '+7';
    if (nums.length > 1) res += ` (${nums.slice(1, 4)}`;
    if (nums.length >= 5) res += `) ${nums.slice(4, 7)}`;
    if (nums.length >= 8) res += `-${nums.slice(7, 9)}`;
    if (nums.length >= 10) res += `-${nums.slice(9, 11)}`;
    return res;
  }

  return '+' + input.slice(0, 15);
};

export {
  TEAM,
  PACKAGES,
  BUDGET_PACKAGES,
  PORTFOLIO,
  BUDGET_PORTFOLIO,
  STEPS,
  INCLUDED_WORKS,
  INCLUDED_DOCS,
  REVIEWS,
  WHATSAPP_REVIEWS,
  VIDEO_REVIEWS,
  PAPER_REVIEWS,
  QUALITY_CHECKLIST,
  MATERIAL_BRANDS,
} from '../data/services';
