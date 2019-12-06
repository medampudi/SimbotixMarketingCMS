import { grommet } from "grommet/themes"
import { deepMerge } from "grommet/utils"

export const customTheme = deepMerge(grommet, {
  name: "Simbotix Theme",
  rounding: 4,
  spacing: 24,
  defaultMode: "light",
  global: {
    colors: {
      brand: "#ff6666",
      background: {
        dark: "#222222",
        light: "#FAFAFA",
      },
      "background-strong": {
        dark: "#000000",
        light: "#FFFFFF",
      },
      "background-weak": {
        dark: "#444444a0",
        light: "#E8E8E880",
      },
      "background-xweak": {
        dark: "#66666699",
        light: "#CCCCCC90",
      },
      text: {
        dark: "#EEEEEE",
        light: "#333333",
      },
      "text-strong": {
        dark: "#FFFFFF",
        light: "#000000",
      },
      "text-weak": {
        dark: "#CCCCCC",
        light: "#444444",
      },
      "text-xweak": {
        dark: "#999999",
        light: "#666666",
      },
      border: "background-xweak",
      control: "brand",
      "active-background": "background-weak",
      "active-text": "text-strong",
      "selected-background": "background-strong",
      "selected-text": "text-strong",
      "status-critical": "#FF4040",
      "status-warning": "#FFAA15",
      "status-ok": "#00C781",
      "status-unknown": "#CCCCCC",
      "status-disabled": "#CCCCCC",
    },
    font: {
      family: "Lato",
      face:
        "\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Alegreya Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Alegreya Sans Regular'), local('AlegreyaSans-Regular'), url(https://fonts.gstatic.com/s/alegreyasans/v10/5aUz9_-1phKLFgshYDvh6Vwt7VdtvWdUhm97sg.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Alegreya Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Alegreya Sans Regular'), local('AlegreyaSans-Regular'), url(https://fonts.gstatic.com/s/alegreyasans/v10/5aUz9_-1phKLFgshYDvh6Vwt7V5tvWdUhm97sg.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Alegreya Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Alegreya Sans Regular'), local('AlegreyaSans-Regular'), url(https://fonts.gstatic.com/s/alegreyasans/v10/5aUz9_-1phKLFgshYDvh6Vwt7VZtvWdUhm97sg.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Alegreya Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Alegreya Sans Regular'), local('AlegreyaSans-Regular'), url(https://fonts.gstatic.com/s/alegreyasans/v10/5aUz9_-1phKLFgshYDvh6Vwt7VltvWdUhm97sg.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Alegreya Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Alegreya Sans Regular'), local('AlegreyaSans-Regular'), url(https://fonts.gstatic.com/s/alegreyasans/v10/5aUz9_-1phKLFgshYDvh6Vwt7VVtvWdUhm97sg.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Alegreya Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Alegreya Sans Regular'), local('AlegreyaSans-Regular'), url(https://fonts.gstatic.com/s/alegreyasans/v10/5aUz9_-1phKLFgshYDvh6Vwt7VRtvWdUhm97sg.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Alegreya Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Alegreya Sans Regular'), local('AlegreyaSans-Regular'), url(https://fonts.gstatic.com/s/alegreyasans/v10/5aUz9_-1phKLFgshYDvh6Vwt7VptvWdUhm8.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Alegreya';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Alegreya Regular'), local('Alegreya-Regular'), url(https://fonts.gstatic.com/s/alegreya/v13/4UaBrEBBsBhlBjvfkSLsx6jj4JN0EwI.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Alegreya';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Alegreya Regular'), local('Alegreya-Regular'), url(https://fonts.gstatic.com/s/alegreya/v13/4UaBrEBBsBhlBjvfkSLlx6jj4JN0EwI.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Alegreya';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Alegreya Regular'), local('Alegreya-Regular'), url(https://fonts.gstatic.com/s/alegreya/v13/4UaBrEBBsBhlBjvfkSLtx6jj4JN0EwI.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Alegreya';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Alegreya Regular'), local('Alegreya-Regular'), url(https://fonts.gstatic.com/s/alegreya/v13/4UaBrEBBsBhlBjvfkSLix6jj4JN0EwI.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Alegreya';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Alegreya Regular'), local('Alegreya-Regular'), url(https://fonts.gstatic.com/s/alegreya/v13/4UaBrEBBsBhlBjvfkSLux6jj4JN0EwI.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Alegreya';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Alegreya Regular'), local('Alegreya-Regular'), url(https://fonts.gstatic.com/s/alegreya/v13/4UaBrEBBsBhlBjvfkSLvx6jj4JN0EwI.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Alegreya';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Alegreya Regular'), local('Alegreya-Regular'), url(https://fonts.gstatic.com/s/alegreya/v13/4UaBrEBBsBhlBjvfkSLhx6jj4JN0.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n",
    },
    graph: {
      colors: {
        dark: ["brand"],
        light: ["brand"],
      },
    },
    control: {
      border: {
        radius: "4px",
      },
    },
  },
  heading: {
    font: {
      family: '"Alegreya"',
    },
  },
  button: {
    border: {
      radius: "4px",
    },
  },
  checkBox: {
    check: {
      radius: "4px",
    },
    toggle: {
      radius: "4px",
    },
  },
  radioButton: {
    check: {
      radius: "4px",
    },
  },
})
