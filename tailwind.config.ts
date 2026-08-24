import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './hooks/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple': 'rgb(82, 0, 128)',
        'brand-green': 'rgb(9, 216, 154)',
        'brand-green-light': 'rgb(215, 253, 207)',
        'brand-yellow': 'rgb(252, 181, 32)',
        'brand-yellow-light': 'rgb(254, 238, 205)',
        'brand-gamboge': '#E49B0F',
        'brand-lavender': 'rgb(235, 225, 253)',
        'brand-dark-accent': 'rgb(15, 23, 42)',
        'neutral-background': 'rgb(252, 250, 237)',
        'text-primary': 'rgb(0, 0, 0)',
        'text-secondary': 'rgb(87, 87, 87)',
      },
      fontFamily: {
        primary: ['Plus Jakarta Sans', 'sans-serif'],
        secondary: ['Nunito Sans', 'sans-serif'],
      },
      borderRadius: {
        'xl': '20px',
        '2xl': '40px',
        'full': '100px',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'marquee': 'marquee 30s linear infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      }
    },
  },
  plugins: [],
}

export default config
