import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData, onCancelBtn }) => {
  const [ inputTitle, setInputTitle ] = useState("");
  const [ inputAmount, setInputAmount ] = useState("");
  const [ inputDate, setInputDate ] = useState("");

  const handleTitleChange = e => setInputTitle(e.target.value);
  const handleAmountChange = e => setInputAmount(e.target.value);
  const handleDateChange = e => setInputDate(e.target.value);

  const handleFormSubmit = e => {
    e.preventDefault();
    
    const newExpenseData = {
      title: inputTitle,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    // Passing state back up to parent NewExpense.js
    onSaveExpenseData(newExpenseData);

    // Resets default value
    setInputTitle("");
    setInputAmount("");
    setInputDate("");
  };
  
  /* 
    Alternative method - If you want to group multiple states into one object. 
    This is personal preference. 
  */

  /*
  const [ userInput, setUserIput ] = useState({
    inputTitle: "",
    inputAmount: "",
    inputDate: "",
  })

  const handleTitleChange = e => {
    return setInputTitle((prevState) => {
      return {
        ...prevState,
        inputTitle: e.target.value
      }
    })
  }
  */
  
  const handleCancelBtn = () => {
    onCancelBtn();
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input 
            id="title"
            name="title" 
            type="text" 
            value={inputTitle} // Adding a value attribute and assigning it the default state is called two-way binding.
            onChange={handleTitleChange}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input 
            id="amount"
            name="amount" 
            type="number" 
            min="0.01" 
            step="0.01"
            value={inputAmount}
            onChange={handleAmountChange}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input 
            id="date"
            name="date" 
            type="date" 
            min="2019-01-01" 
            max="2022-12-31"
            value={inputDate}
            onChange={handleDateChange}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button onClick={handleCancelBtn}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;