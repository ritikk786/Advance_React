import Card from '../UI/Card';
import '../UI/card.css'
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem.js';
import { useState } from "react"




const Expenses=(props)=>{
    const [filteredYear, setfilteredYear]=useState('2020')
    const filterdExpense=(year)=>{
        setfilteredYear(year)
        console.log(year)
        
      }

     const filterdexpense = props.expenses.filter((expense)=>{
        return expense.date.getFullYear().toString()===filteredYear
     })
    
    return(
        <Card className='expenses'>
    
    <ExpenseFilter filter={filterdExpense}/>
    {filterdexpense.map(value=>(
  
      <ExpenseItem expense={value} key={value.id} place={props.LocationOfExpenditure}></ExpenseItem>
    ))}
    </Card>
    )
}
export default Expenses