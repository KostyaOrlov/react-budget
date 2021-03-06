import React, { Component } from "react";
import styles from "./App.css";
import moment from "moment";
import Button from "./components/Button/Button";
import Link from "./components/Link/Link";
import InputForm from "./components/InputForm/InputForm";

class App extends Component {
  constructor(props) {
    super(props);

    let storageState = localStorage.getItem("state");
    let initState;

    if (storageState !== null) {
      storageState = JSON.parse(storageState);
      initState = { ...storageState, date: moment() };
    } else {
      initState = {
        date: moment(),
        navSelected: "expanse",
        transactions: []
      };
    }

    this.state = initState;
  }

  handleAddDay = () => {
    this.setState({ date: this.state.date.add(1, "day") });
  };

  handleSubstractDay = () => {
    this.setState({ date: this.state.date.subtract(1, "day") });
  };

  handleNavClick = event => {
    this.setState({ navSelected: event.target.getAttribute("name") });
    console.log(this.state.navSelected);
  };

  handleSubmitTransaction = (sum, category) => {
    const { date: TodayDate, transactions } = this.state;

    const newTransaction = {
      date: TodayDate.format("DD.MM.YYYY"),
      sum,
      category
    };

    const newTransactions = [...transactions, newTransaction];

    newTransactions.sort((a, b) => {
      const aDate = moment(a.date, "DD.MM.YYYY");
      const bDate = moment(b.date, "DD.MM.YYYY");
      return aDate.isAfter(bDate);
    });

    this.setState({ transactions: newTransactions });
  };

  componentDidUpdate() {
    const { date } = this.state;
    localStorage.setItem(
      "state",
      JSON.stringify({ ...this.state, date: date.format() })
    );
  }

  getIncomes = () => {
    const { transactions, date } = this.state;

    const incomes = transactions
      .filter(({ date: transactionDate }) =>
        moment(transactionDate, "DD.MM.YYYY").isSame(date, "month")
      )
      .reduce((acc, { sum }) => (sum > 0 ? acc + sum : acc), 0);

    return incomes;
  };

  getExpanses = () => {
    const { transactions, date } = this.state;

    const expanses = transactions
      .filter(({ date: transactionDate }) =>
        moment(transactionDate, "DD.MM.YYYY").isSame(date, "month")
      )
      .reduce((acc, { sum }) => (sum < 0 ? acc + sum : acc), 0);

    return expanses;
  };

  getTotal = () => {
    const { transactions, date } = this.state;

    const total = transactions
      .filter(({ date: transactionDate }) =>
        moment(transactionDate, "DD.MM.YYYY").isSame(date, "month")
      )
      .reduce((acc, { sum }) => acc + sum, 0);

    return total;
  };

  getDailyBudget = () => {
    const dailyBudget =
      this.getTotal() / (moment().daysInMonth() - moment().date());

    console.log(dailyBudget);
    return dailyBudget;
  };

  render() {
    const { date, navSelected, transactions } = this.state;
    return (
      <section className={styles.sectionContainer}>
        <header className={styles.header}>
          <h1>Реактивный бюджет</h1>
          <div className={styles.dateLine}>
            <p>{date.format("DD.MM.YYYY")}</p>
            <Button onClick={this.handleSubstractDay}>-</Button>
            <Button onClick={this.handleAddDay}>+</Button>
          </div>
          <div className={styles.infoContainer}>
            <p>Доход за месяц: {this.getIncomes()}</p>
            <p>Расход за месяц: {this.getExpanses()}</p>
            <p>Баланс: {this.getTotal()}</p>
            <p>Дневной бюджет до конца месяца: {this.getDailyBudget()}</p>
          </div>
        </header>
        <main>
          <nav className={styles.navContainer}>
            <Link
              name="expanse"
              onClick={this.handleNavClick}
              selected={navSelected === "expanse"}
            >
              Расходы сегодня
            </Link>
            <Link
              name="incomes"
              onClick={this.handleNavClick}
              selected={navSelected === "incomes"}
            >
              Доходы
            </Link>
          </nav>
          {navSelected === "expanse" ? (
            <InputForm name="expanse" onSubmit={this.handleSubmitTransaction}>
              Внести расходы
            </InputForm>
          ) : (
            <InputForm name="incomes" onSubmit={this.handleSubmitTransaction}>
              Внести доход
            </InputForm>
          )}

          <table className={styles.table}>
            <tbody>
              {transactions
                .filter(({ date: transactionDate }) => {
                  return moment(transactionDate, "DD.MM.YYYY").isSame(
                    date,
                    "month"
                  );
                })
                .map(({ date, sum, category }, index) => {
                  return (
                    <tr key={index}>
                      <td>{date}</td>
                      <td>{sum}</td>
                      <td>{category}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </main>
      </section>
    );
  }
}

export default App;
