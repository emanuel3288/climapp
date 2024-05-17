/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      maxWidth: {
        'xlmax': '120rem', // Personaliza el ancho máximo para 8xl según tus necesidades
      },
      backgroundImage: {
        'cirrus': "url('/src/assets/casa.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
        'glaciar':"url('https://uvn-brightspot.s3.amazonaws.com/assets/vixes/btg/curiosidades.batanga.com/files/Que-es-un-glaciar-3.jpg')",
        'weathernow': "url('/src/assets/casa.jpg')",
      },
      colors:{
        "s2condPurple": '#a32eff', // works 
                s2condPink: '#ff0099', // works 
                s2condOrange: '#ff5f55', // works 
                s2condYellow: '#ffe600', // should work
                s2condLime: '#cdff64', // works 
                s2condMint: '#2af1b5', // works at 'text-s2condMint' but not at 'border-s2condMint'
                secondTest: '#ffe600', // works  <-- I tested it for s2condYellow but it works perfectly!
                s2condTest2: '#2af1b5', // should work 
                colorTiempoPresente: '#ffffffbe',
      },
    },
  },
  plugins: [],
  safelist: [{
    pattern: /(bg|text|border)-s2cond(Purple|Pink|Orange|Yellow|Lime|Mint|Test|Test2)/
}

]
}