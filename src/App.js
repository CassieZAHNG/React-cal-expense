import ExpenseItem from './components/ExpenseItem';
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
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      />
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      />
    </div>
  );
}

export default App;
