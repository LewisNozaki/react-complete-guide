import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "../Filter/ExpenseFilter";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  const [ filterYear, setFilterYear ] = useState("2021");
  
  const getYearFromFilter = year => setFilterYear(year);

  const filteredExpenses = expenses.filter(expense => expense.date.getFullYear().toString() === filterYear);
  
  return (
    <Card className="expenses">
      <ExpenseFilter 
        onFilterYearSelect={getYearFromFilter}
        selected={filterYear}
      />
      {console.log(filterYear)}
      {expenses.map(expense => {
        return (
          <ExpenseItem 
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )
      })}
    </Card>
  )
}

export default Expenses;