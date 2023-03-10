import './NewExpenses.css'
import ExpenseForm from './ExpenseForm'

const NewExpense =(props)=>{
    const takeexpensedata=(expensedata)=>{
        props.addExpense(expensedata)
    }
    return (
        <div className="new-expense">
            <ExpenseForm adddata={takeexpensedata}/>
        </div>
    )   
}
export default NewExpense