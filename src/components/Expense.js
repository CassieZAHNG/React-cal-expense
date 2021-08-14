import ExpenseItem from './ExpenseItem';
import './Expense.css';
import Card from './Card';

function Expense(props) {
  return (
    <Card className='expenses'>
      <ExpenseItem
        title={props.data[0].title}
        amount={props.data[0].amount}
        date={props.data[0].date}
      />
      <ExpenseItem
        title={props.data[1].title}
        amount={props.data[1].amount}
        date={props.data[1].date}
      />
    </Card>
  );
}

export default Expense;
