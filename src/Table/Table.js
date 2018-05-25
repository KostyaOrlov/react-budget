import React, { Component } from "react";
import styles from "./Table.css";
import moment from "moment";

class Table extends Component {
  render() {
    const dateFormat = "DD.MM.YYYY";
    const { transactions, date } = this.props;
    return (
      <table className={styles.table}>
        <tbody>
          {transactions
            .filter(({ date: transactionDate }) => {
              return moment(transactionDate, dateFormat).isSame(date, "month");
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
    );
  }
}

export default Table;
