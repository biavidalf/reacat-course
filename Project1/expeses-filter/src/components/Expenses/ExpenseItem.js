import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./../UI/Card";

const ExpenseItem = ({ expenseDate, expenseTitle, expenseAmount }) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate expenseDate={expenseDate} />

        <div className="expense-item__description">
          <h2 className="">{expenseTitle}</h2>
          <div className="expense-item__price">${expenseAmount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
