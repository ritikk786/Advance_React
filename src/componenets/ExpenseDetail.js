import './ExpenseItem.css'

function ExpenseDetail (props){
return(
<div className='expense-item__description'>

                <h2  >{props.detail.title}</h2>
                <h2  >{props.place}</h2>
                <div className='expense-item__price'>${props.detail.amount}</div>
            </div>
)
}
export default ExpenseDetail