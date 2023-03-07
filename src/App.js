import logo from './logo.svg';
import './App.css';
import './componenets/Expenses/Expenses.css'
import ExpenseItem from './componenets/Expenses/ExpenseItem.js';
import './componenets/UI/card.css'
import Card from './componenets/UI/Card';
import NewExpenses from './componenets/NewExpenses/NewExpenses';
const App=()=> {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const LocationOfExpenditure ='pathankot'
  for(let i=0;i<expenses.length;i++){

  }
  return (
    <header className='container'>
    <h2>Expense tracker</h2>
      <NewExpenses/>
    <Card className='expenses'>
    {/* <ExpenseItem expense={expenses[0]} place={LocationOfExpenditure}></ExpenseItem>
    <ExpenseItem expense={expenses[1]} place={LocationOfExpenditure}></ExpenseItem>
    <ExpenseItem expense={expenses[2]} place={LocationOfExpenditure} ></ExpenseItem>
    <ExpenseItem expense={expenses[3]} place={LocationOfExpenditure}></ExpenseItem> */}
    {expenses.map(value=>(
  
      <ExpenseItem expense={value} key={value.id} place={LocationOfExpenditure}></ExpenseItem>
    ))}
    </Card>
    </header>
  );
}

export default App;
