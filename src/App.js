import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewInput/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e0',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: "2021-05-12"
  },
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 294.67,
    date: "2021-02-28"
  },
  {
    id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: "2021-02-12"
  },
  {
    id: 'e3',
    title: 'Toilet Paper',
    amount: 94.12,
    date: "2020-07-14"
  }
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