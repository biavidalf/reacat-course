import './ExpenseDate.css';

const ExpenseDate = ({ expenseDate }) => {
    const month = expenseDate.toLocaleString('pt-BR', {month: 'long'});
    const day = expenseDate.toLocaleString('pt-BR', {day: '2-digit', timeZone: 'UTC'});
    const year = expenseDate.getFullYear();
    
    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    )
}

export default ExpenseDate;