import ExpenseItem from './ExpenseItem';
import './Expense.css';
import Card from './Card';
import { useState } from 'react';
import ExpenseFilter from './filterExpense/ExpenseFilter';

function Expense(props) {
  const [Year, setYear] = useState('2020');
  const changeFilterHandler = newFilter => {
    setYear(newFilter);
  };
  const filteredArr = props.data.filter(item => {
    return item.date.getFullYear().toString() === Year;
  });
  let expenseContent = <p>there is no content</p>;
  if (filteredArr.length > 0) {
    expenseContent = filteredArr.map(expense => (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={expense.id}
      />
    ));
  }

  return (
    <Card className='expenses'>
      <ExpenseFilter selected={Year} onChangeFilter={changeFilterHandler} />
      {expenseContent}
    </Card>
  );
}

export default Expense;
