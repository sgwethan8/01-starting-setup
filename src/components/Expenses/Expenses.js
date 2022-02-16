import Card from "../UI/Card";
import { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() == filteredYear;
  });

  const onFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <ExpensesFilter onFilter={onFilterHandler} />
      <Card className="expenses">
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
}

export default Expenses;
