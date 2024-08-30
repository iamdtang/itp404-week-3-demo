import { Component } from "react";

import "./Count.css";

export default class Count extends Component {
  render() {
    let className;

    if (this.props.value < 0) {
      className = "negative";
    } else if (this.props.value > 0) {
      className = "positive";
    } else {
      className = "";
    }

    return <div className={className}>Count: {this.props.value}</div>;
  }
}
