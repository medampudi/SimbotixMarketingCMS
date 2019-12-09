import React, { Component } from "react"
import styled from "styled-components"
import gsap from "gsap"
import { PixiPlugin } from "gsap/PixiPlugin.js"
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js"

//without this line, PixiPlugin and MotionPathPlugin may get dropped by your bundler (tree shaking)...
gsap.registerPlugin(PixiPlugin, MotionPathPlugin)

import React, { useEffect } from "react"
import PropTypes from "prop-types"

const indexCTAbtn = () => {
  useEffect(() => {
    const tl = new gsap()
    tl.fromTo("#button", 1, { opacity: 0, y: 50 }, { opacity: 1, y: 0 })
  }, [])

  animate = () => {
    const { toggle } = this.state
    gsap.to(this.square, 0.3, {
      x: "random(-300, 300, 5)",
      ease: "bounce",
    })
  }
  return <div></div>
}

indexCTAbtn.propTypes = {}

export default indexCTAbtn

export default class CTAButton extends Component {
  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ toggle: !this.state.toggle }, () => this.animate()),
      2000
    )
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  animate = () => {
    const { toggle } = this.state
    gsap.to(this.square, 0.3, {
      x: "random(-300, 300, 5)",
      ease: "bounce",
    })
  }

  render = () => <Square ref={ref => (this.square = ref)} />
}
