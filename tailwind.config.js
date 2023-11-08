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
          '0%': { transform: 'translateX(0px) translateY(0px)' },
          '100%': { transform: 'translateX(45px) translateY(-45px)' },
        },
        'pendulum': {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(-60deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        'slant': 'slant 0.45s',
        'pendulum': 'pendulum 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
