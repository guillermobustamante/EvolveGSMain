import typography from '@tailwindcss/typography';

/**
 * Color system derived from the Evolve Global Solutions
 * Brand Guidelines v1.0 (May 2026).
 *   Primary Teal  #027FA1  → brand-600
 *   Bright Cyan   #0BBBEF  → accent-500
 *   Sky           #3ECEE8  → accent-400
 *   Aqua          #64F6FF  → accent-300
 *   Charcoal Gray #4D4D4D  → ink-700 (primary text)
 *   Light Gray    #CDCDCD  → ink-300
 *
 * brand-* and ink-* scales are mathematically tinted/shaded around
 * the canonical values above so existing utility classes still work.
 *
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary Teal (master brand) tints/shades
        brand: {
          50:  '#E6F4F8',
          100: '#CCEAF1',
          200: '#9AD5E4',
          300: '#5FB7CF',
          400: '#2E9AB8',
          500: '#0F8AAB',
          600: '#027FA1', // ← Primary Teal (exact)
          700: '#026682',
          800: '#024D62',
          900: '#013642',
          950: '#011F26',
        },
        // Accent palette (Bright Cyan, Sky, Aqua)
        accent: {
          300: '#64F6FF', // Aqua (sparingly)
          400: '#3ECEE8', // Sky
          500: '#0BBBEF', // Bright Cyan
          600: '#0796C2',
          700: '#067099',
        },
        // Neutrals (Charcoal + Light Gray family)
        ink: {
          50:  '#FAFAFA',
          100: '#F4F4F4',
          200: '#E5E5E5',
          300: '#CDCDCD', // ← Light Gray (exact)
          400: '#9A9A9A',
          500: '#6E6E6E',
          600: '#5C5C5C',
          700: '#4D4D4D', // ← Charcoal Gray (exact, primary text)
          800: '#3D3D3D',
          900: '#2A2A2A',
          950: '#1A1A1A',
        },
      },
      fontFamily: {
        // Brand primary: Sansation. First fallback per brand guidelines: Arial.
        sans: [
          'Sansation',
          'Arial',
          'Helvetica',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
      },
      boxShadow: {
        soft:   '0 1px 2px rgba(2, 127, 161, 0.05), 0 8px 24px rgba(2, 127, 161, 0.07)',
        lifted: '0 4px 12px rgba(2, 127, 161, 0.10), 0 16px 40px rgba(2, 127, 161, 0.12)',
      },
      backgroundImage: {
        // Soft tinted hero wash, brand palette
        'hero-gradient':
          'radial-gradient(1200px 600px at 10% -10%, rgba(2,127,161,0.18), transparent 60%), radial-gradient(900px 500px at 90% 0%, rgba(11,187,239,0.18), transparent 60%)',
        // Strong brand gradient for CTAs and accent fields
        'cta-gradient':
          'linear-gradient(135deg, #024D62 0%, #027FA1 45%, #0BBBEF 100%)',
        // Subtle gradient for cards and chips
        'chip-gradient':
          'linear-gradient(135deg, #E6F4F8 0%, #CCEAF1 100%)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [typography],
};
