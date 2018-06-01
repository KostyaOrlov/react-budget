import React, { Component } from "react";
import styles from "./InputLine.css";

class InputLine extends Component {
  render() {
    const { value, onChange, placeholder, name, type, label } = this.props;
    return (
      <div className={styles.inputLine}>
        <label>{label}</label>
        <input
          className={styles.input}
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default InputLine;
