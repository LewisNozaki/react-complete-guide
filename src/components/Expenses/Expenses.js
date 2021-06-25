import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpenseFilter from "../Filter/ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  const [ filterYear, setFilterYear ] = useState("2021");
  
  const getYearFromFilter = year => setFilterYear(year);

  const filteredExpenses = expenses.filter(expense => {
    return expense.date.slice(0, 4) === filterYear
  });
  
  return (
    <Card className="expenses">
      <ExpenseFilter 
        onFilterYearSelect={getYearFromFilter}
        selected={filterYear}
      />
      <ExpensesChart 
        expenses={filteredExpenses}
      />
      <ExpensesList 
        items={filteredExpenses}
        filterYear={filterYear}
      />
    </Card>
  )
}

export default Expenses;