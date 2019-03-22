import React, { Component } from "react"

import ArrowBack from "./ArrowBack";
import ArrowForward from "./ArrowForward";
import Medium from "./Medium";
import Github from "./Github";
import LinkedIn from "./LinkedIn";
import Peepeth from "./Peepeth";
import Twitter from "./Twitter";

class Icon extends Component {
  render() {
    switch (this.props.name) {
        case "arrow-forward":
          return <ArrowForward {...this.props} />;
        case "arrow-back":
          return <ArrowBack {...this.props} />;
        case "medium":
          return <Medium {...this.props} />;
        case "github":
          return <Github {...this.props} />;
        case "linkedin":
          return <LinkedIn {...this.props} />;
        case "peepeth":
          return <Peepeth {...this.props} />;
        case "twitter":
          return <Twitter {...this.props} />;
        default:
          return;
      }
  }
}

export default Icon
