import './ExpenseDate.css';

function ExpenseDate(propsExpenseItem) {
  const day = propsExpenseItem.date.toLocaleString('en-US', {
    day: '2-digit'
  });
  const month = propsExpenseItem.date.toLocaleString('en-US', {
    month: 'long'
  });
  const year = propsExpenseItem.date.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__day'>{day}</div>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
    </div>
  );
}

export default ExpenseDate;
