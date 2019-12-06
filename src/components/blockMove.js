import React, { Component } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";

//without this line, PixiPlugin and MotionPathPlugin may get dropped by your bundler (tree shaking)...
gsap.registerPlugin(PixiPlugin, MotionPathPlugin);
const Square = styled.div`
  width: 100px;
  height: 100px;
  background-color: deepskyblue;
  align-self: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export default class DeepSkyBlue extends Component {
  static description = "TweenMax Expo easeOut";
  static library = "gsap";

  state = {
    toggle: false
  };

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ toggle: !this.state.toggle }, () => this.animate()),
      2000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  animate = () => {
    const { toggle } = this.state;
    gsap.to(this.square, 0.3, {
      x: "random(-300, 300, 5)",
      ease: "bounce"
    });
  };

  render = () => <Square ref={ref => (this.square = ref)} />;
}
