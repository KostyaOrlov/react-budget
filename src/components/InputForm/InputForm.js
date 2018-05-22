import React, { Component } from "react";
import styles from "./InputForm.css";

class InputForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transaction: null,
      category: null
    };
  }

  handleChangeInput = event => {
    if (event.target.name === "transaction") {
      this.setState({ transaction: +event.target.value });
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
      transaction: null,
      category: null
    });
  };

  render() {
    const { category, transaction } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.inputLine}>
          <label>{this.props.children}</label>
          <input
            className={styles.input}
            type="text"
            placeholder="Введите сумму"
            name="transaction"
            value={transaction || ""}
            onChange={this.handleChangeInput}
          />
        </div>
        <div className={styles.inputLine}>
          <label>Категория</label>
          <input
            className={styles.input}
            placeholder="Введите категорию"
            name="category"
            value={category || ""}
            onChange={this.handleChangeInput}
          />
        </div>
        <button className={styles.button} onClick={this.handleEnter}>
          Внести
        </button>
      </div>
    );
  }
}

export default InputForm;
