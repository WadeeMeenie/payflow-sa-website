export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 80px rgba(15, 23, 42, 0.08)',
        premium: '0 20px 60px rgba(11, 92, 173, 0.12)',
        glow: '0 0 40px rgba(11, 92, 173, 0.15)',
      },
      colors: {
        darknavy: '#061A49',
        navy: '#0F172A',
        deepteal: '#123F4D',
        payflow: '#0B5CAD',
        paygreen: '#0A9F8F',
        logoGreen: '#6CCB00',
        softbg: '#EEF6FB',
        cardborder: '#DDE7EF',
        muted: '#64748B',
      },
      backdropBlur: {
        xs: '4px',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(11, 92, 173, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(11, 92, 173, 0.5)' },
        },
      },
      animation: {
        marquee: 'slide 24s linear infinite',
        fadeInUp: 'fadeInUp 0.6s ease-out',
        float: 'float 3s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
