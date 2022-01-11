import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  console.log(props)
  console.log(props[0])
  return <ExpenseItem title={props.title} amount={props.amount} date={props.date}></ExpenseItem>
}

export default Expenses;
