import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          primary: '#F97316',
          glow: '#FDBA74',
        },
        dark: {
          950: '#0F0A07',
          900: '#120E0B',
          850: '#1C140E',
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#4B5563',
            lineHeight: '1.75',
            h2: {
              color: '#1F2937',
              fontWeight: '700',
              fontSize: '1.875rem',
              marginTop: '3rem',
              marginBottom: '1.5rem',
            },
            h3: {
              color: '#1F2937',
              fontWeight: '700',
              fontSize: '1.5rem',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            p: {
              marginBottom: '1.5rem',
              lineHeight: '1.75',
            },
            ul: {
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
            li: {
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
            },
            strong: {
              color: '#1F2937',
              fontWeight: '600',
            },
            a: {
              color: '#F97316',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
