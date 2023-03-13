import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate.js';
import ExpenseDetail from './ExpenseDetail.js';
import Card from '../UI/Card.js'



const ExpenseItem=(props)=> {
    console.log(props.place)
    
    const filterdExpense=(year)=>{
        console.log(year)
        
    
      }
// console.log(props.expense)
    return (
        <li>
        <Card className="expense-item">
          
            <div >
                <ExpenseDate date={props.expense.date} />
            </div>
            
            <ExpenseDetail detail={props.expense}  place={props.place} />
           

        </Card>
        </li>

    );
}

export default ExpenseItem