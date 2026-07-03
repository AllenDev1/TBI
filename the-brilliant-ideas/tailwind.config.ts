import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm paper background — the canvas of the story
        paper: {
          DEFAULT: '#FAF6EF',
          warm: '#F5EFE3',
          deep: '#EFE7D7',
        },
        // Deep Himalayan night ink for text
        ink: {
          DEFAULT: '#20303C',
          soft: '#48606F',
          faint: '#7A8B96',
        },
        // Brand orange — the sunrise over the peaks
        sunrise: {
          DEFAULT: '#F97316',
          bright: '#FB923C',
          deep: '#C2570C',
          faint: '#FFF1E5',
        },
        // Laligurans — Nepal's national flower (rhododendron)
        laligurans: {
          DEFAULT: '#C9354E',
          deep: '#9E2440',
          faint: '#FBEAED',
        },
        // Himal — cool mountain blues
        himal: {
          DEFAULT: '#5C7387',
          mist: '#B9C7D2',
          snow: '#EEF3F7',
          night: '#16222C',
        },
        // Terai forest greens (home of the one-horned rhino)
        forest: {
          DEFAULT: '#2F6B4F',
          deep: '#1E4A36',
          faint: '#E8F2EC',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'soar': 'soar 14s ease-in-out infinite',
        'soar-slow': 'soar 20s ease-in-out infinite',
        'sway': 'sway 6s ease-in-out infinite',
        'flutter': 'flutter 3.5s ease-in-out infinite',
        'kenburns': 'kenburns 28s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pendulum': 'pendulum 7s ease-in-out infinite',
      },
      keyframes: {
        pendulum: {
          '0%, 100%': { transform: 'rotate(-0.8deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
        kenburns: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        soar: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(30px, -18px) rotate(3deg)' },
          '50%': { transform: 'translate(60px, -6px) rotate(-2deg)' },
          '75%': { transform: 'translate(30px, 10px) rotate(2deg)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2.5deg)' },
        },
        flutter: {
          '0%, 100%': { transform: 'skewX(0deg) scaleY(1)' },
          '50%': { transform: 'skewX(-4deg) scaleY(0.96)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
