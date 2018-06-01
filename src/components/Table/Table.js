import React, { Component } from "react";
import styles from "./Table.css";
import moment from "moment";
import { DateFormat, filterMonthTransactions } from "../../helpers";

class Table extends Component {
  render() {
    const { transactions, date } = this.props;
    const filteredTransactions = filterMonthTransactions(transactions, date);
    return (
      <table className={styles.table}>
        <tbody>
          {filteredTransactions.map(({ date, sum, category }, index) => {
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
