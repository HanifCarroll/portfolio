/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontSize: {
      xs: ['0.9rem', { lineHeight: '1.5' }],
      sm: ['1.05rem', { lineHeight: '1.6' }],
      base: ['1.2rem', { lineHeight: '1.75' }],
      lg: ['1.35rem', { lineHeight: '1.75' }],
      xl: ['1.5rem', { lineHeight: '1.75' }],
      '2xl': ['1.8rem', { lineHeight: '1.4' }],
      '3xl': ['2.25rem', { lineHeight: '1.3' }],
      '4xl': ['2.7rem', { lineHeight: '1.2' }],
      '5xl': ['3.6rem', { lineHeight: '1.1' }],
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xl: '1024px'
      }
    },
    extend: {
      fontFamily: {
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#E07A5F',
          light: '#F4A68D',
          dark: '#C45D43',
          foreground: '#ffffff',
        },
        surface: {
          DEFAULT: '#FAF8F5',
          dark: '#18181B',
        },
        accent: {
          warm: '#F2E8DE',
          cool: '#E8EEF2',
        }
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
          }
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
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
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
