import Expense from './components/Expense';
import NewExpense from './components/newExpense/NewExpense';
import { useState } from 'react';

function App() {
  const defaultExpense = [
    { id: '1', title: 'test1', date: new Date(2021, 7, 14), amount: '89' },
    { id: '2', title: 'test2', date: new Date(2019, 6, 14), amount: '80' },
    { id: '3', title: 'test3', date: new Date(2020, 3, 14), amount: '67' },
    { id: '4', title: 'test4', date: new Date(2019, 5, 14), amount: '82' },
    { id: '5', title: 'test5', date: new Date(2020, 11, 14), amount: '88' }
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
