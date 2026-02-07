import React, { useState } from 'react';

interface ConsentCheckboxesProps {
  onChange?: (allChecked: boolean) => void;
}

export default function ConsentCheckboxes({ onChange }: ConsentCheckboxesProps) {
  const [checks, setChecks] = useState({ personal: false, marketing: false });

  const handleChange = (key: 'personal' | 'marketing', checked: boolean) => {
    const next = { ...checks, [key]: checked };
    setChecks(next);
    onChange?.(next.personal && next.marketing);
  };

  return (
    <div className="space-y-2.5">
      <label className="flex items-start gap-2 cursor-pointer">
        <input
          type="checkbox"
          name="consent_personal_data"
          required
          checked={checks.personal}
          onChange={(e) => handleChange('personal', e.target.checked)}
          className="mt-0.5 shrink-0 w-4 h-4 accent-blue-600 cursor-pointer"
        />
        <span className="text-xs text-gray-500 leading-snug select-none">
          Нажимая кнопку, я даю{' '}
          <a
            href="/docs/consent_to_the_processing_of_personal_data.docx"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-gray-600 hover:text-blue-600 transition-colors"
          >
            согласие на обработку персональных данных
          </a>{' '}
          и соглашаюсь с{' '}
          <a
            href="/docs/privacy_policy.docx"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-gray-600 hover:text-blue-600 transition-colors"
          >
            политикой в отношении обработки персональных данных
          </a>
          .
        </span>
      </label>
      <label className="flex items-start gap-2 cursor-pointer">
        <input
          type="checkbox"
          name="consent_marketing"
          required
          checked={checks.marketing}
          onChange={(e) => handleChange('marketing', e.target.checked)}
          className="mt-0.5 shrink-0 w-4 h-4 accent-blue-600 cursor-pointer"
        />
        <span className="text-xs text-gray-500 leading-snug select-none">
          Нажимая кнопку, я даю{' '}
          <a
            href="/docs/consent_to_the_processing_of_personal_data.docx"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-gray-600 hover:text-blue-600 transition-colors"
          >
            согласие на получение рассылки рекламно-информационных материалов
          </a>
          .
        </span>
      </label>
    </div>
  );
}
