import './ExpenseItem.css';
import './ExpenseDate';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import { useState } from 'react';

function ExpenseItem(props) {
  // let title = props.title;
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle('updated!');
  };
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={clickHandler}>my</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
