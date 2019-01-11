import React, { Component } from "react"

class LinkedIn extends Component {
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
        <path fill={fill} d="M195.29,120.6v70.46H154.44V125.32c0-16.52-5.9-27.79-20.69-27.79-11.29,0-18,7.6-21,14.94-1.08,2.63-1.35,6.29-1.35,10v68.63H70.57s.55-111.35,0-122.88h40.86V85.59c-.08.13-.19.28-.27.4h.27v-.4c5.43-8.36,15.13-20.3,36.83-20.3C175.14,65.29,195.29,82.85,195.29,120.6ZM27.83,8.94c-14,0-23.12,9.17-23.12,21.23,0,11.79,8.87,21.24,22.58,21.24h.27c14.25,0,23.11-9.45,23.11-21.24C50.4,18.11,41.81,8.94,27.83,8.94ZM7.13,191.06H48V68.18H7.13Z"/>
  </svg>);
  }
}

export default LinkedIn
