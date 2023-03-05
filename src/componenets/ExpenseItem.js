import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate.js';
import ExpenseDetail from './ExpenseDetail.js';


function ExpenseItem(props) {

    return (
        <div className="expense-item">

            <div >
                <ExpenseDate date={props.expense.date} />
            </div>
            
            <ExpenseDetail detail={props.expense} place={props.place} />

        </div>

    );
}

export default ExpenseItem