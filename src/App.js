import Expense from './components/Expense';
import NewExpense from './components/newExpense/NewExpense';
import { useState } from 'react';

function App() {
  const defaultExpense = [
    { id: '1', title: 'test1', date: new Date(2021, 7, 14), amount: '879' },
    { id: '2', title: 'test1', date: new Date(2019, 7, 14), amount: '8' },
    { id: '3', title: 'test2', date: new Date(2020, 9, 14), amount: '89' }
  ];
  //fiter array
  // const filterHelper = (arr, selectYear) => {
  //   return arr.filter(
  //     item => item.date.getFullYear().toString() === selectYear
  //   );
  // };

  const [addedExpense, setAddedExpense] = useState(defaultExpense);
  // const [filterArr, setFilterArr] = useState(addedExpense);

  const enteredExpenseHandler = expense => {
    setAddedExpense(oldExpense => {
      return [expense, ...oldExpense];
    });
  };

  // const selectedFilterHandler = Year => {
  //   const filteredArr = filterHelper(addedExpense, Year);
  //   setFilterArr(filteredArr);
  //   console.log('select year: ' + Year);
  //   console.log(filteredArr);
  // };

  return (
    <div>
      <NewExpense onEnteredExpense={enteredExpenseHandler} />
      <Expense data={addedExpense} />
    </div>
  );
}

export default App;
