import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ length, onAddNewItem }) => {
  const [ displayForm, setDisplayForm ] = useState(false);

  const handleSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: `e${length}`,
    }

    // Passing the new item (with id) back to App.js
    onAddNewItem(expenseData);
    // Close form once completed
    toggleForm();
  }
  
  const toggleForm = () => setDisplayForm(!displayForm);
  
  return (
    <div className="new-expense">
      {!displayForm && 
        <button onClick={toggleForm}>Add New Expense</button>}
      {displayForm &&
        <ExpenseForm 
          onSaveExpenseData={handleSaveExpenseData}
          onCancelBtn={toggleForm}
        />}
    </div>
  )
}

export default NewExpense;