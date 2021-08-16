import ExpenseList from './ExpenseList';
import './Expense.css';
import Card from './Card';
import { useState } from 'react';
import ExpenseFilter from './filterExpense/ExpenseFilter';
import ExpenseChart from './ExpenseChart';

function Expense(props) {
  const [Year, setYear] = useState('2020');
  const changeFilterHandler = newFilter => {
    setYear(newFilter);
  };
  const filteredArr = props.data.filter(item => {
    return item.date.getFullYear().toString() === Year;
  });

  return (
    <Card className='expenses'>
      <ExpenseFilter selected={Year} onChangeFilter={changeFilterHandler} />
      <ExpenseChart expenses={filteredArr} />
      <ExpenseList items={filteredArr} />
    </Card>
  );
}

export default Expense;
