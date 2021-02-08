module.exports = {
  purge: {
    content: [
      "./components/**/*.js",
      "./components/**/**/*.js",
      "./pages/**/*.js",
    ],
  },
  darkMode: false,
  theme: {
    extend: {
      boxShadow: {
        full: "0 0 15px 0 rgba(0,0,0,0.1)",
      },
      colors: {
        "floss-pink": "#FF00FF",
        "pavilion-purple": "#65008A",
        "level-green": "#00FF00",
        "regency-green": "#005533",
        "lanes-red": "#FC3D43",
        "ron-burgundy": "#550022",
        "sky-blue": "#00DAFF",
        "channel-blue": "#2D2E82",
        "sunrise-yellow": "#FFB200",
        "sunset-red": "#CD0600",
      },
      fontFamily: {
        "avant-garde-bold": ["Avant Garde Pro Bold", "sans-serif"],
        "proxima-regular": ["Proxima Nova Regular", "sans-serif"],
        "proxima-bold": ["Proxima Nova Bold", "sans-serif"],
      },
      lineHeight: {
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem",
        15: "3.75rem",
        16: "4rem",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
        20: "5rem",
      },
      spacing: {
        '100p': '100%',
        '50p': '50%',
      }
    },
    outline: {
      pink: "2px solid #FF00FF",
    },
  },
  variants: {
    extend: {
      outline: ["hover"],
    },
  },
  plugins: [],
};
