import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
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
      <ExpensesList 
        items={filteredExpenses}
        filterYear={filterYear}
      />
    </Card>
  )
}

export default Expenses;