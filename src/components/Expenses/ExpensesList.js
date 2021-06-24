import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ items, filterYear }) => {
  let content = <h2 className="expenses-list__fallback">No expenses found for {filterYear}.</h2>;
  
  if (items.length > 0) {
    content = items.map(expense => (
      <ExpenseItem 
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <ul className="expenses-list">
      {content}
    </ul>
  )
}

export default ExpensesList;