import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'orange-mrbarber-400': '#d79468',
      },
      backgroundImage: {
        'mrbarber-hero': "url('/assets/img/hero.jpg')",
        'mrbarber-about': "url('/assets/img/about.jpg')",
        'service-01': "url('/assets/img/service-01.jpg')",
        'service-02': "url('/assets/img/service-04.jpg')",
      },
      fontFamily: {
        heading: ['var(--font-edo)'],
        sans: ['var(--font-robotoRegular)'],
        robotoBold: ['var(--font-robotoBold)'],
      },
    },
  },
  plugins: [],
}
export default config
