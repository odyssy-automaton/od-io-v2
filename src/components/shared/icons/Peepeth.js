import React, { Component } from "react"

class Peepeth extends Component {
  static defaultProps = {
      viewBox: '0 0 200 200',
      width: '32px',
      height: '32px',
      fill: '#000',
    }
  render() {
    let {
        width,
        height,
        style,
        viewBox,
        className,
        fill} = this.props;
    return (<svg
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    >
    <g>
      <path fill={fill} d="M100.88,11.16l5.36-8.44L72.4,15.21a95.14,95.14,0,0,0-11.08,4.08l-.1,0h0A96.25,96.25,0,0,0,12,146l.14-.21s-12.53-75,46.11-75.14c14.38,0,23.75,16.27,21.54,31.74-2.07,14.5-9.06,27.4-9.06,27.4l29.33-33.91,29.34,33.91s-7-12.9-9.06-27.4c-2.21-15.47,7.16-31.76,21.54-31.74,58.64.13,46.11,75.14,46.11,75.14l.14.21A96.21,96.21,0,0,0,100.88,11.16Z"/>
      <path fill={fill} d="M155.1,100.43a13.79,13.79,0,0,0-5.57,1.17,5.4,5.4,0,1,1-7.41,7.8,13.87,13.87,0,1,0,13-9Z"/>
      <path fill={fill} d="M44.88,100.43a13.82,13.82,0,0,0-5.57,1.17,5.4,5.4,0,1,1-7.41,7.8,13.88,13.88,0,1,0,13-9Z"/>
      <polygon fill={fill} points="100.09 102.62 69.13 136.88 100.09 148.16 100.09 102.62"/>
      <polygon fill={fill} points="69.13 141.02 100.09 169.22 131.06 141.02 100.09 153.25 69.13 141.02"/>
      <polygon fill={fill} points="100.11 148.04 131.08 136.59 100.11 102.51 100.11 148.04"/>
    </g>
  </svg>);
  }
}

export default Peepeth
