import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import { useState } from 'react';
const NewExpense = props => {
  const SaveDataHandler = expense => {
    const updatedExpense = {
      ...expense,
      id: Math.random().toString()
    };
    props.onEnteredExpense(updatedExpense);
    setIsEditting(false);
  };

  const [isEditting, setIsEditting] = useState(false);
  const updateIsEditing = () => {
    setIsEditting(true);
  };
  const stopIsEditing = () => {
    setIsEditting(false);
  };
  return (
    <div className='new-expense'>
      {!isEditting && <button onClick={updateIsEditing}>New Expense</button>}
      {isEditting && (
        <ExpenseForm
          onSaveData={SaveDataHandler}
          onChangeEditting={stopIsEditing}
        />
      )}
    </div>
  );
};

export default NewExpense;
