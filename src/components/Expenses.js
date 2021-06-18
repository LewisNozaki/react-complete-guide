import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css";

const Expenses = ({expenses}) => {
  return (
    <Card className="expenses">
      {expenses.map(expense => {
        return (
          <ExpenseItem 
            id={expense.id}
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