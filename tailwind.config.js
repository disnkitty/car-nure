/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cinder: '#1A181C',
        chartreuse: '#EAFF00',
        mist: '#939393',
        concrete: '#F2F2F2',
        orange: '#FDA400',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        pill: '50px',
      },
      boxShadow: {
        nav: '0 4px 24px rgba(26, 24, 28, 0.08)',
        card: '0 2px 12px rgba(26, 24, 28, 0.06)',
      },
    },
  },
  plugins: [],
}
