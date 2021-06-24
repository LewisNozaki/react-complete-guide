import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewInput/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e0',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e1', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12) 
  },
  {
    id: 'e2',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e3',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [ expenses, setExpenses ] = useState(DUMMY_EXPENSES)
  
  const handleAddNewItem = (item) => {
    setExpenses((prevState) => [item, ...prevState]);
  }
  
  let length = expenses.length;
  
  return (
    <div>
      <NewExpense 
        length={length}
        onAddNewItem={handleAddNewItem}
      />
      <Expenses 
        expenses={expenses}
      />
    </div>
  );
}

export default App;
