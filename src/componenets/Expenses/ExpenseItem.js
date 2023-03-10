import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate.js';
import ExpenseDetail from './ExpenseDetail.js';
import Card from '../UI/Card.js'


const ExpenseItem=(props)=> {

    return (
        <Card className="expense-item">
          
            <div >
                <ExpenseDate date={props.expense.date} />
            </div>
            
            <ExpenseDetail detail={props.expense}  place={props.place} />
           

        </Card>

    );
}

export default ExpenseItem