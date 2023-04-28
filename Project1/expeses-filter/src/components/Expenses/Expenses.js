import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "./../UI/Card";
import "./Expenses.css";
import { useState } from "react";

const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const onSelect = (year) => {
    setSelectedYear(year);
    console.log("expenses: " + year);
  };

  return (
    <div>
      <ExpensesFilter initialValue={selectedYear} onSelect={onSelect} />

      <Card className="expenses">
        {expenses.map(({ title, amount, date }, index) => {
          return (
            <ExpenseItem
              expenseDate={date}
              expenseTitle={title}
              expenseAmount={amount}
              key={`${index}-${title}`}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
