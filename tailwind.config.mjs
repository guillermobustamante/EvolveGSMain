import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#EFF5FF',
          100: '#DCE8FF',
          200: '#B9D1FF',
          300: '#8AB0FF',
          400: '#5687FF',
          500: '#2E63F0',
          600: '#1E4BD1',
          700: '#173BA8',
          800: '#143285',
          900: '#0F2A6B',
          950: '#091745',
        },
        accent: {
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
        },
        ink: {
          900: '#0B1220',
          800: '#111827',
          700: '#1F2937',
          600: '#374151',
          500: '#4B5563',
          400: '#6B7280',
          300: '#9CA3AF',
          200: '#E5E7EB',
          100: '#F3F4F6',
          50:  '#F9FAFB',
        },
      },
      fontFamily: {
        sans: [
          'Segoe UI Variable',
          'Segoe UI',
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15, 42, 107, 0.04), 0 8px 24px rgba(15, 42, 107, 0.06)',
        lifted: '0 4px 12px rgba(15, 42, 107, 0.08), 0 16px 40px rgba(15, 42, 107, 0.10)',
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(1200px 600px at 10% -10%, rgba(46,99,240,0.20), transparent 60%), radial-gradient(900px 500px at 90% 0%, rgba(34,211,238,0.18), transparent 60%)',
        'cta-gradient':
          'linear-gradient(135deg, #143285 0%, #1E4BD1 50%, #06B6D4 100%)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [typography],
};
