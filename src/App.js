import Expense from './components/Expense';
import NewExpense from './components/newExpense/NewExpense';
import { useState } from 'react';

function App() {
  const defaultExpense = [
    { id: '1', title: 'test1', date: new Date(2020, 7, 14), amount: '879' },
    { id: '2', title: 'test2', date: new Date(2020, 9, 14), amount: '89' }
  ];
  const [addedExpense, setAddedExpense] = useState(defaultExpense);

  const enteredExpenseHandler = expense => {
    console.log(expense);
    setAddedExpense(oldExpense => {
      return [expense, ...oldExpense];
    });
  };
  return (
    <div>
      <NewExpense onEnteredExpense={enteredExpenseHandler} />
      <Expense data={addedExpense} />
    </div>
  );
}

export default App;
