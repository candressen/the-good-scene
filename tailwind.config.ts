import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        background: '#f5f5f5',
        'accent-1': '#e7675b',
        'accent-2': '#2d2828',
        'accent-3': '#9b7fa6',
        'accent-coral': '#e06666',
        'accent-purple': '#7c3aed',
      },
      screens: {
        mq450: { max: '450px' },
        mq750: { max: '750px' },
        mq1100: { max: '1100px' },
        mq1250: { max: '1250px' },
      },
    },
  },
} satisfies Config
