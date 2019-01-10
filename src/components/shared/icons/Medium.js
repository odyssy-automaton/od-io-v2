import React, { Component } from "react"

class Medium extends Component {
  static defaultProps = {
      viewBox: '0 0 24 24',
      width: '100', 
      height: '100',
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
        <path
          fill={fill}
          d="M46.53,65.22a5.05,5.05,0,0,0-1.65-4.28L32.65,46.2V44h38L100,108.38,125.79,44H162v2.2l-10.46,10a3,3,0,0,0-1.16,2.93v73.68a3,3,0,0,0,1.16,2.93l10.22,10V148H110.38v-2.2L121,135.53c1-1,1-1.35,1-2.94V73L92.59,147.76h-4L54.36,73v50.08a6.92,6.92,0,0,0,1.9,5.74L70,145.55v2.21H31v-2.21l13.76-16.69a6.64,6.64,0,0,0,1.77-5.74Z"
        />
  </svg>);
  }
}

export default Medium