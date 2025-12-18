import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Manrope', 'sans-serif'],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.600'),
            h1: { fontFamily: theme('fontFamily.heading') },
            h2: { fontFamily: theme('fontFamily.heading') },
            h3: { fontFamily: theme('fontFamily.heading') },
            h4: { fontFamily: theme('fontFamily.heading') },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
