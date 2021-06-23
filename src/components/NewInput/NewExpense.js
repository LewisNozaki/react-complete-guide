import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ length, onAddNewItem }) => {
  const handleSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: `e${length}`,
    }
    
    console.table(expenseData);

    // Passing the new item (with id) back to App.js
    onAddNewItem(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm 
        onSaveExpenseData={handleSaveExpenseData}
      />
    </div>
  )
}

export default NewExpense;