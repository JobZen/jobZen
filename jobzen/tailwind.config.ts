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
          "malek":'url("https://static.vecteezy.com/ti/vetor-gratis/p3/2062629-abstract-background-with-technology-circuit-board-texture-electronic-motherboard-illustration-communication-and-engineering-concept-vector-illustration-vetor.jpg")',
          "aloui":'url("https://scontent.ftun10-2.fna.fbcdn.net/v/t1.15752-9/418595269_237198476096033_8534854468575086641_n.png?stp=dst-png_s2048x2048&_nc_cat=108&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=0MRq6DqQd4kAX8GmYO8&_nc_ht=scontent.ftun10-2.fna&oh=03_AdSU-b1TfkRPQB47RbZPW3YpzuoPOSQDzMnmof5v-Vux3A&oe=65DA27E3")'
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
        'lato':['Lato'],
        'josefin':['Josefin Sans'],
        'bruno':['Bruno Ace SC'],
        "BlackOps":['Black Ops One']
        
      },
      
    },
  },
  plugins: [],
}
export default config
