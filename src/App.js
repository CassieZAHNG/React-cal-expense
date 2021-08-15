import Expense from './components/Expense';
import NewExpense from './components/newExpense/NewExpense';
function App() {
  const expense = [
    {
      title: 'test1',
      date: new Date(2020, 7, 14),
      amount: '879'
    },
    {
      title: 'test2',
      date: new Date(2020, 9, 14),
      amount: '89'
    }
  ];
  return (
    <div>
      <NewExpense />
      <Expense data={expense} />
    </div>
  );
}

export default App;
