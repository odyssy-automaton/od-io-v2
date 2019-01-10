import React, { Component } from "react"

class Arrow extends Component {
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
              d="M0 0h24v24H0z"
            />
            <path
              fill={fill}
              d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
            />
      </svg>);
  }
}

export default Arrow