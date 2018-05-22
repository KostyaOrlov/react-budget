import React, { Component } from "react";
import styles from "./Button.css";

class Button extends Component {
  render() {
    return (
      <button className={styles.button} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
