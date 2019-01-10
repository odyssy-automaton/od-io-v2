import React, { Component } from "react"

import Arrow from "./Arrow";
import Medium from "./Medium";
import Github from "./Github";

class Icon extends Component {
  render() {
    switch (this.props.name) {
        case "arrow":
          return <Arrow {...this.props} />;
        case "medium":
          return <Medium {...this.props} />;
        case "github":
          return <Github {...this.props} />;
        default:
          return;
      }
  }
}

export default Icon