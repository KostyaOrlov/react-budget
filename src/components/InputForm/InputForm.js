import React, { Component } from "react";
import styles from "./InputForm.css";
import InputLine from "../InputLine/InputLine";

class InputForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transaction: "",
      category: ""
    };
  }

  handleChangeInput = event => {
    if (event.target.name === "transaction") {
      this.setState({ transaction: event.target.value });
    } else {
      this.setState({ category: event.target.value });
    }
  };

  handleEnter = () => {
    const { onSubmit, name } = this.props;
    const { transaction, category } = this.state;
    console.log(typeof transaction);
    if (!transaction && typeof transaction !== "number") return;
    let sum;
    if (name === "expanse") {
      sum = -1 * Math.abs(parseFloat(transaction));
    } else {
      sum = Math.abs(parseFloat(transaction));
    }

    onSubmit(sum, category);
    this.setState({
      transaction: "",
      category: ""
    });
  };

  render() {
    const { category, transaction } = this.state;
    return (
      <div className={styles.container}>
        <InputLine
          className={styles.inputLine}
          type="number"
          placeholder="Введите сумму"
          name="transaction"
          value={transaction}
          onChange={this.handleChangeInput}
        >
          {this.props.children}
        </InputLine>

        <InputLine
          className={styles.inputLine}
          type="text"
          placeholder="Введите кетегорию"
          name="category"
          value={category}
          onChange={this.handleChangeInput}
        >
          {this.props.children}
        </InputLine>
        <button className={styles.button} onClick={this.handleEnter}>
          Внести
        </button>
      </div>
    );
  }
}

export default InputForm;
