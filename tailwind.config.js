/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'slant': {
          '50%': { transform: 'translateX(10px) translateY(0)' },
        },
    },
    animation: {
      'slant': 'slant 1s ease-in-out infinite alternate',
    },
  },
  plugins: [],
  }
}