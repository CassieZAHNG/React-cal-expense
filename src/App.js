import Expense from './components/Expense';
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
      <h2>Let</h2>
      <Expense data={expense} />
    </div>
  );
}

export default App;
