import React, { Component } from "react"

class Medium extends Component {
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
        <path
          fill={fill}
          d="M25.53,54.13a7.53,7.53,0,0,0-2.46-6.38l-18.23-22V22.5H61.47l43.75,96L143.65,22.5h54v3.28L182,40.68a4.47,4.47,0,0,0-1.73,4.37V154.86a4.47,4.47,0,0,0,1.73,4.37l15.23,14.9v3.37H120.69v-3.28l15.82-15.31c1.49-1.49,1.49-2,1.49-4.38V65.72L94.17,177.14h-6L37.2,65.72v74.64A10.28,10.28,0,0,0,40,148.91l20.48,24.94v3.29H2.38v-3.29L22.89,149a9.91,9.91,0,0,0,2.64-8.55Z"
        />
  </svg>);
  }
}

export default Medium
