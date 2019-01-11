import React, { Component } from "react"

class ArrowBack extends Component {
  static defaultProps = {
      viewBox: '0 0 24 24',
      width: '24px',
      height: '24px',
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
    return (
      <svg
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
              d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
            />
      </svg>);
  }
}

export default ArrowBack
