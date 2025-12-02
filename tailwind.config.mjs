/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Neutral Foundation (80% of design)
        charcoal: '#1A1A1A',
        'near-black': '#2D2D2D',
        industrial: '#4A4A4A',
        steel: '#636466',
        mist: '#A7A9AC',
        fog: '#E5E5E5',
        cloud: '#F2F0ED',
        cream: '#F8F6F3',
        pearl: '#FAFAF8',

        // Accent Colors (15% of design)
        accent: {
          DEFAULT: '#6C3461',
          hover: '#824175',
          subtle: 'rgba(108, 52, 97, 0.08)',
        },

        // Metallic Accents (5% of design)
        bronze: '#D4A574',
        copper: '#B87333',
        oxidized: '#8B4513',

        // Semantic Colors
        success: '#166534',
        warning: '#A16207',
        error: '#991B1B',
        info: '#1E40AF',
      },
      fontFamily: {
        vazir: ['Vazirmatn', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        heading: ['Vazirmatn', 'Inter', 'sans-serif'],
        body: ['Vazirmatn', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.04)',
        md: '0 4px 12px rgba(0, 0, 0, 0.06)',
        lg: '0 8px 24px rgba(0, 0, 0, 0.08)',
        xl: '0 16px 48px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'spin-slow': 'spin 2s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.steel'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
