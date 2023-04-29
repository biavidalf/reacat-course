import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    date: new Date(2020, 7, 14),
    title: "Toilet Paiper",
    amount: 94.12,
  },
  {
    id: "e2",
    date: new Date(2021, 2, 12),
    title: "New TV",
    amount: 799.49,
  },
  {
    id: "e3",
    date: new Date(2021, 2, 28),
    title: "Car Insurance",
    amount: 294.97,
  },
  {
    id: "e4",
    date: new Date(2021, 5, 12),
    title: "New Desk (Wooden)",
    amount: 450,
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);  

  const addExpenseHandler = expense => {
    setExpenses(prev => [expense, ...prev]);
  }

  return (
    <div className="">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
