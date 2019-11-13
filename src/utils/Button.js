import styled from "styled-components"
import { styles } from "../utils"
const BannerButton = styled.button`
  display: block;
  color: ${styles.colors.mainWhite};
  background: transparent;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: 0.5rem;
  font-weight: 700;
  ${styles.border({ color: `${styles.colors.mainWhite}` })};
  margin-top: 1rem;
  ${styles.transition({})};
  &:hover {
    background: ${styles.colors.mainWhite};
    color: ${styles.colors.mainBlack};
    cursor: pointer;
  }
`

const SectionButton = styled(BannerButton)`
  color: ${styles.colors.mainBlack};
  ${styles.border({ color: `${styles.colors.mainBlack}` })};
  &:hover {
    background: ${styles.colors.mainBlack};
    color: ${styles.colors.mainYellow};
    cursor: pointer;
  }
`

const MenuButton = styled(BannerButton)`
  font-size: 0.75rem;
  letter-spacing: 0.25rem;
  color: ${styles.colors.primary};
  margin-top: 0rem;
  ${styles.border({ color: `${styles.colors.primary}` })};
  &:hover {
    background: ${styles.colors.primary};
    color: ${styles.colors.mainWhite};
    cursor: pointer;
  }
`

export { BannerButton, SectionButton, MenuButton }
