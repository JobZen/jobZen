import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          "malek":'url("https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/417432355_226741377179458_8472291631417033461_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=636Rpc99NrIAX-Ko4_C&_nc_ht=scontent.ftun9-1.fna&oh=00_AfCGFWJzej-Qm9h0b0WlTWFKUmACAljhuHXqRR8QPV_yAg&oe=65A2B2B3")'

      },
      colors:{
        'grisss':'#737373',
        'bluefateh':'#91C7EF',
        'blueghamek':'#267296'
      },
      fontFamily: {
        'jolly-lodger': ['Jolly Lodger'],
        'jura':['Jura'],
        'jockey-one':['Jockey One'],
        'lato':['Lato']
      },
      
    },
  },
  plugins: [],
}
export default config
