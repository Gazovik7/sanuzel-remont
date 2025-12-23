/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        heading: ['Manrope', 'sans-serif'], // Kept from old config just in case
      },
      colors: {
        primary: {
          DEFAULT: '#D4AF37', // Gold
          50: '#fbf8ea',
          100: '#f5efcd',
          200: '#eadc9f',
          300: '#dec26c',
          400: '#d4af37',
          500: '#b89228',
          600: '#96711d',
          700: '#78561a',
          800: '#63461b',
          900: '#543c1b',
        },
        secondary: '#09090b', // Dark
        dark: '#09090b',
        light: '#F5F5F5',
        // Legacy colors support (mapping to new palette where possible or keeping distinct)
        accent: {
          50: '#f4f7fa',
          100: '#e3ebf5',
          200: '#c5d8eb',
          300: '#98bce0',
          400: '#669bd3',
          500: '#427fc7',
          600: '#3064a9',
          700: '#275089',
          800: '#234471',
          900: '#213a5e',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'marquee': 'marquee 40s linear infinite',
        'shine': 'shine 1s',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shine: {
          '100%': { left: '125%' }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
