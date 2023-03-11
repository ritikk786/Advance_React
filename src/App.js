import logo from './logo.svg';
import './App.css';
import './componenets/Expenses/Expenses.css'
import ExpenseItem from './componenets/Expenses/ExpenseItem.js';
import './componenets/UI/card.css'
import NewExpenses from './componenets/NewExpenses/NewExpenses';
import ExpenseFilter from './componenets/Expenses/ExpenseFilter';
import { useState } from 'react'
import Expenses from './componenets/Expenses/Expenses';


const App=()=> {
  const [expenses, setexpenses] = useState([
    {
      id: 1,
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 2, title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 3,
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 4,
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);
  const LocationOfExpenditure ='pathankot'

  const addExpensedata=(data)=>{
    const newExpense = {
      id : expenses[expenses.length-1].id+1,
      title : data.title,
      amount : data.amount,
      date : data.date
    }
    // console.log(newExpense)
    // setexpenses([...expenses,newExpense])

    setexpenses((previousExpense)=>{
        return ([...expenses,newExpense])
      })
      // console.log([...expenses,newExpense])
  }
  
  return (
    <header className='container'>
    
      <NewExpenses addExpense={addExpensedata}/>
      <Expenses expenses={expenses} LocationOfExpenditure={LocationOfExpenditure}/>
    
    </header>
  );
}

export default App;
