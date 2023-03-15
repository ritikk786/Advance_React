import './NewExpenses.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react'

const NewExpense =(props)=>{
    const [condition, setCondition] = useState(false)
    
    const condtionhandler =()=>{
        setCondition(true)
    }
    const takeexpensedata=(expensedata)=>{
        props.addExpense(expensedata)
        setCondition(false)
    }

    const exitformhandler =()=>{
        setCondition(false)
    }
    return (
        <div className="new-expense">
            {!condition && <button onClick={condtionhandler}>Add New Expense</button>}
            {condition && <ExpenseForm adddata={takeexpensedata} exitfun={exitformhandler}/>}
        </div>
    )   
}
export default NewExpense