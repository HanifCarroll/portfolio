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
      colors: {
        primary: {
          DEFAULT: '#3b82f6', // blue-500
          foreground: '#ffffff',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%', // add required value here
          }
        }
      }
    },
	},
	plugins: [require('@tailwindcss/typography')],
}
