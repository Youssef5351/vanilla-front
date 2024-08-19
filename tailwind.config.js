/*@type {import('tailwindcss').Config} 
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

*/
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      colors : {
        primary : "#fff24",
        page : "var(--page-bg)",
        more : "#997F44",
        circle: "#ffd371",
        cols: "var(--primary-color)",
        muted : "var(--muted-text)",
        switchbg : "var(--switch-bg)",
        switchCircleBg : "var(--switch-circle-bg)",
        sun : "var(--icon-sun)",
        moon : "var(--icon-moon)",
        hoverColor : "var(--hover-color)",
        system: "#E7E6E4",
        orange1 : "#FA5C40",
        buttonColor : "rgb(90 88 88)"
      },
      fontFamily: {
        DMSans : ['DM Sans'],
        Inter: ['Inter'],
        Poppins: ['Poppins'],
        Roboto : ['Roboto'],
        NeueMontreal: ['PP Neue Montreal, sans-serif'],
        brigends: ['Brigends Expanded', 'sans-serif'],
        DrukWide: ['Druk Wide', 'sans-serif'],
        'general-sans': ['"General Sans"', 'sans-serif'],
        'pp-condensed-black': ['PP Formula Condensed Black', 'sans-serif'],
        'pp-condensed-extralight': ['PP Formula Condensed Extralight', 'sans-serif'],
        'pp-extended-bold': ['PP Formula Extended Bold', 'sans-serif'],
        'pp-extended-medium': ['PP Formula Extended Medium', 'sans-serif'],
        'pp-extrabold': ['PP Formula Extrabold', 'sans-serif'],
        'pp-medium': ['PP Formula Medium', 'sans-serif'],
        'pp-narrow-regular': ['PP Formula Narrow Regular', 'sans-serif'],
      },
      boxShadow : {
        effect : "0 4px 8px #0000001a"
      },
      gap : {
        good : "1.65rem",
      },
      spacing : {
        left : "1px",
        leftback : "1px",
        minus : "-2px",
        tive : "-0.2em",
        mm : "-70px",
        nine: "16rem",
        six : "6px",
        ortho : "13px",
        switchCirclePos : "var(--switch-circle-pos)",
      },
      transitionProperty: {
        'opacity': 'opacity'
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out'
      },
      transitionDuration: {
        '0': '0ms',
        '100': '100ms',
        '500': '500ms',
        '750': '750ms'
      },
      transitionDelay: {
        '35': '35ms'
      },
      rotate : {
        '45': '45deg',
        '90': '90deg'
      },
      width: {
        '500': '500px',
        like : "5.7rem",
        kda : "5.8rem"
      },
      height: {
        high : '0.070rem',
        half : "5.7em",
        sun : '21px',
        moon : "22px",
        px: "1px",
        two: "2px"
      },
      fontSize: {
        '55px': '52px',
        '2vw': '2vw',
      },
      animation: {
        'move-left': 'moveLeft 0.5s forwards',
        cursor: 'cursor .5s infinite alternate',
        slide: 'slide 25s linear infinite',
      },
      keyframes: {
        moveLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-10px)' },
        },
        cursor: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0.7)' },
        },
          slide: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-100%)' },
          },
      },
      borderWidth: {
        '1': '1px',
      },
      borderRadius: {
        '7px': '6px',
      },
      borderColor: {
        'transparent': 'transparent',
      },
    },
    variants: {
      extend: {
        backgroundColor: ['hover'],
      },
    },
    variants: {
      extend: {
        opacity: ['group-active'],
      },
    },
  },
  plugins: [],
}

