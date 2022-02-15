import React, { useState } from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenseHandler(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  }

  const finishEditingHandler = () => {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {isEditing === false && <button type="submit" onClick={startEditingHandler}>
        Add Expense
      </button>}

      {isEditing === true && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onAddOrCancelExpense={finishEditingHandler}></ExpenseForm>}
      
    </div>
  );
};

export default NewExpense;
