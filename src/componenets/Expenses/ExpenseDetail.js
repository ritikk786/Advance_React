import './ExpenseItem.css'

const ExpenseDetail= (props)=>{


    const clickhandler = ()=>{
        console.log('clicked')
    }

    const deletehandler = (e)=>{
        e.target.parentNode.parentNode.remove()
    }

return(
<div className='expense-item__description'>

                <h2  >{props.detail.title}</h2>
                <h2  >{props.place}</h2>
                <div className='expense-item__price'>${props.detail.amount}</div>
                <button onClick={clickhandler}>Click on me</button>
                <button onClick={deletehandler}>Delete</button>
            </div>
)
}
export default ExpenseDetail