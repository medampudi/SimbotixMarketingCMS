import { grommet } from "grommet/themes"
import { deepMerge } from "grommet/utils"

export const customTheme = deepMerge(grommet, {
  global: {
    colors: {
      brand: "#ff6666",
      border: "dark-4",
      background: "light-3",
      placeholder: "dark-5",
      control: "brand",
      "accent-1": "#FFB5B5",
      "accent-2": "#FF8A8A",
      "accent-3": "#E43F3F",
      "accent-4": "#C11C1C",
      "neutral-1": "#669ACC",
      "neutral-2": "#C4DDF4",
      "neutral-3": "#91BAE2",
      "neutral-4": "#447CB2",
      "neutral-5": "#29649D",
    },
    elevation: {
      none: "none",
      xsmall: "0px 1px 2px rgba(68, 68, 68, 0.5)",
      small: "0px 2px 4px rgba(68, 68, 68, 0.5)",
      medium: "0px 3px 8px rgba(68, 68, 68, 0.5)",
      large: "0px 6px 12px rgba(68, 68, 68, 0.5)",
      xlarge: "0px 8px 16px rgba(68, 68, 68, 0.5)",
    },
    drop: {
      background: "rgb(255, 242, 201)",
      shadow: "0px 3px 8px rgba(68, 68, 68, 0.5)",
      border: {
        radius: "2px",
      },
    },
    input: {
      border: {
        radius: "4px",
      },
    },
    font: {
      family: "Alegrya",
    },
  },
  layer: {
    background: "#fff8e1",
    overlay: {
      background: "rgba(68, 68, 68, 0.5)",
    },
    border: {
      radius: "4px",
    },
  },
  checkBox: {
    border: {
      color: "dark-3",
    },
    check: {
      radius: "4px",
    },
    toggle: {
      radius: "2px",
    },
  },
  anchor: {
    color: "brand",
  },
  heading: {
    font: {
      family: "Alegreya Sans",
    },
  },
  radioButton: {
    border: {
      color: "dark-6",
    },
  },
  button: {
    border: {
      color: "brand",
      radius: "4px",
    },
    color: "brand",
    primary: { color: "brand" },
  },
})
