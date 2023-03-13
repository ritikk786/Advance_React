import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'
const ExpensesList = (props)=>{
    console.log(props.place)
    
if(props.items.length===0){
    return <h2 className='expenses-list__fallback'>no expense founded</h2>
}

if(props.items.length==1){
    return (
        
        props.items.map(value=>(<ul className='expenses-list'>
<ExpenseItem expense={value} key={value.id} place={props.LocationOfExpenditure}></ExpenseItem><h2 className='expenses-list__fallback'> Only single Expense here. Please add more...</h2></ul>))
  
    )
}
if(props.items.length>1){
    return (
        <ul className='expenses-list'>
        {props.items.map((value) =>(
            <ExpenseItem expense={value} key={value.id} place={props.place}></ExpenseItem>))}
            </ul>
    )
}
}
export default ExpensesList