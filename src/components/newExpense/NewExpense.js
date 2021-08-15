import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = props => {
  const SaveDataHandler = expense => {
    const updatedExpense = {
      ...expense,
      id: Math.random().toString()
    };
    props.onEnteredExpense(updatedExpense);
    // console.log('from NewExpense');
    // console.log(updatedExpense);
  };
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveData={SaveDataHandler} />
    </div>
  );
};

export default NewExpense;
