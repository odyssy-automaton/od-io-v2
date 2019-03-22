import React, { Component } from "react"

class Twitter extends Component {
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
        <path d="M62.9,181.26c75.47,0,116.75-62.53,116.75-116.76,0-1.77,0-3.54-.12-5.3A83.51,83.51,0,0,0,200,38a82.11,82.11,0,0,1-23.57,6.46,41.17,41.17,0,0,0,18-22.7,82.09,82.09,0,0,1-26.05,10A41.07,41.07,0,0,0,98.49,69.1,116.48,116.48,0,0,1,13.92,26.23,41.07,41.07,0,0,0,26.62,81,40.82,40.82,0,0,1,8,75.87v.52a41.06,41.06,0,0,0,32.92,40.23,41.14,41.14,0,0,1-18.53.7,41.1,41.1,0,0,0,38.34,28.5,82.45,82.45,0,0,1-51,17.6,83.87,83.87,0,0,1-9.77-.6,116.12,116.12,0,0,0,62.9,18.4"/>
  </svg>);
  }
}

export default Twitter
