import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [ inputTitle, setInputTitle ] = useState("");
  const [ inputAmount, setInputAmount ] = useState("");
  const [ inputDate, setInputDate ] = useState("");

  const handleTitleChange = e => setInputTitle(e.target.value);
  const handleAmountChange = e => setInputAmount(e.target.value);
  const handleDateChange = e => setInputDate(e.target.value);
  
  /* Alternative method - If you want to group multiple states into one object. 
     This is personal preference. */

  // const [ userInput, setUserIput ] = useState({
  //   inputTitle: "",
  //   inputAmount: "",
  //   inputDate: "",
  // })

  // const handleTitleChange = e => {
  //   return setInputTitle((prevState) => {
  //     return {
  //       ...prevState,
  //       inputTitle: e.target.value
  //     }
  //   })
  // }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input 
            id="title"
            name="title" 
            type="text" 
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
            onChange={handleDateChange}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;