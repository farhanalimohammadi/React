/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        componentBg: {
          mainBg : '#262729',
          mainBg2 : '#292A2D',
          primeryBg : '#1E1E1E',
          buttonBg : '#36373B',
          inputBg : '#36373B'
        },
        textsColor: {
          texts: "#FFFFFF",
          routeText: '#4D4D4D'
        },
        btnColors: {
          Mailblue: '#1481FE'
        }
      },

      fontSize:{
        logoSize: '24px',
        nameSize: '16px',
        logoRes: '16px',
        nameRes: '14px',
        secondnameRes: '12px',
        thirdnameRes: '10px',
      },

      spacing:{
        YP: "20px",
        XP: "64px",
        topSpace: '100px'
      },

      screens:{
        'specialRes': {'min': '390px'},
        'firstRes': {'min': '500px'},
        'secondRes': {'min': '700px'},
        'thirdRes': {'min': '1080px'}
      },

    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}

