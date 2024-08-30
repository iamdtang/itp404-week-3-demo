import { Component } from "react";

import "./Count.css";

export default class Count extends Component {
  get className() {
    if (this.props.value < 0) {
      return "negative";
    } else if (this.props.value > 0) {
      return "positive";
    } else {
      return "";
    }
  }

  render() {
    return <div className={this.className}>Count: {this.props.value}</div>;
  }
}
