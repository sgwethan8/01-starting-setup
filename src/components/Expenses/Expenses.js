import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() == filteredYear;
  });

  const onFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  let expensesContent = <p> No expenses found. </p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>
    ))
  };

  return (
    <div>
      <ExpensesFilter onFilter={onFilterHandler} />
      <Card className="expenses">
          {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;
