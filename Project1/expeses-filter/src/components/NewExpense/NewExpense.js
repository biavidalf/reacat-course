import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = ({ onAddExpense }) => {
  const [showForm, setShowForm] = useState(false);
  
  const openFormHandler = () => {
    setShowForm(true);
  }
  const closeFormHandler = () => {
    setShowForm(false);
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    onAddExpense(expenseData);
    setShowForm(false);
  }

  return (
    <div className="new-expense">
      {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCloseFormHandler={closeFormHandler} />}
      {!showForm && <button onClick={openFormHandler}>Add New Expense</button>}
    </div>
  );
};

export default NewExpense;
