import React, { Component } from "react";
import styles from "./InputForm.css";
import InputLine from "../InputLine/InputLine";

const INPUT_FIELDS = [
  {
    type: "number",
    placeholder: "Введите сумму",
    name: "transaction",
    label: "Внести расходы"
  },
  {
    placeholder: "Введите кетегорию",
    name: "category",
    label: "Внести доход"
  },
  {
    placeholder: "Введите ник",
    name: "username",
    label: "Внести ник"
  },
  {
    placeholder: "Введите Имя",
    name: "name",
    label: "Внести Имя"
  }
];

class InputForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transaction: "",
      category: "",
      name: "",
      username: ""
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
    const { category, transaction, name, userName } = this.state;
    const commonOpts = {
      className: styles.inputLine,
      type: "text",
      onChange: this.handleChangeInput
    };

    return (
      <div className={styles.container}>
        {INPUT_FIELDS.map(item => (
          <InputLine {...commonOpts} {...item} value={this.state[item.name]} />
        ))}

        {/* <InputLine
          {...commonOpts}
          type="number"
          placeholder="Введите сумму"
          name="transaction"
          label="Внести расходы"
          value={transaction}
        />

        <InputLine
          {...commonOpts}
          placeholder="Введите кетегорию"
          name="category"
          label="Внести доход"
          value={category}
        />

        <InputLine
          {...commonOpts}
          placeholder="Введите ник"
          name="username"
          label="Внести ник"
          value={userName}
        />

        <InputLine
          {...commonOpts}
          placeholder="Введите Имя"
          name="name"
          label="Внести Имя"
          value={name}
        /> */}

        <button className={styles.button} onClick={this.handleEnter}>
          Внести
        </button>
      </div>
    );
  }
}

export default InputForm;
