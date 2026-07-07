/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        secondary: '#0F766E',
        accent: '#F59E0B',
        success: '#16A34A',
        background: '#F8FAFC',
        dark: '#111827',
        muted: '#64748B',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        numbers: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 24px 70px rgba(15, 23, 42, 0.12)',
        soft: '0 12px 36px rgba(15, 23, 42, 0.08)',
      },
      borderRadius: {
        card: '8px',
      },
    },
  },
  plugins: [],
};
