import Typography from "typography"
import deyoungTheme from "typography-theme-de-young"

delete deyoungTheme.googleFonts
const typography = new Typography(deyoungTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
