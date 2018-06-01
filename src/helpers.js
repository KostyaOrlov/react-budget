import moment from "moment";

const DateFormat = "DD.MM.YYYY";

function filterMonthTransactions(transactions, date) {
  return transactions.filter(transaction =>
    moment(transaction.date, DateFormat).isSame(date, "month")
  );
}

export { DateFormat, filterMonthTransactions };
