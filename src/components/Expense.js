import ExpenseItem from './ExpenseItem';
import './Expense.css';
import Card from './Card';
import { useState } from 'react';
import ExpenseFilter from './filterExpense/ExpenseFilter';

function Expense(props) {
  const [state, setstate] = useState('2020');
  const changeFilterHandler = newFilter => {
    setstate(newFilter);
    console.log('from expense');
    console.log(newFilter);
  };

  return (
    <Card className='expenses'>
      <ExpenseFilter selected={state} onChangeFilter={changeFilterHandler} />
      {props.data.map(expense => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
        />
      ))}
    </Card>
  );
}

export default Expense;
