import React, { Component } from "react";
import styles from "./Link.css";

class Link extends Component {
  render() {
    const className = this.props.selected ? styles.active : styles.link;

    return (
      <span
        className={className}
        onClick={this.props.onClick}
        name={this.props.name}
      >
        {this.props.children}
      </span>
    );
  }
}

export default Link;
