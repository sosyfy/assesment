import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: ['var(--font-anton)', 'sans-serif'],
        'dm-mono': ['var(--font-dm-mono)', 'monospace'],
      },
      colors: {
        primary: '#92E600',
        'brand-green': '#8FE800',
        'primary-text': '#A1ACC3',
        "dark-blue": "#1A2C38",
      },
    },
  },
  plugins: [],
}
export default config
