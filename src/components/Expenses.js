import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return <ExpenseItem title={props.title} amount={props.amount} date={props.date}></ExpenseItem>
}

export default Expenses;
