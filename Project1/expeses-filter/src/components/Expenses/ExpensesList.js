import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ expenses }) => {
  if (expenses.length === 0) {
    return <p className="expenses-list__fallback">Found no expenses.</p>;
  }

  return (
    <ul className="expenses-list">
      {expenses.map(({ id, title, amount, date }) => {
        return (
          <ExpenseItem
            key={id}
            expenseDate={date}
            expenseTitle={title}
            expenseAmount={amount}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
