
import { useState } from 'react'
import './ExpenseItem.css'

const ExpenseDetail= (props)=>{

    const [title, setTitle] = useState(props.detail.title)

    const [amount, setAmount] = useState(props.detail.amount)

    const clickhandler = ()=>{
        setTitle('updated')

    }

    const deletehandler = (e)=>{
       e.target.parentNode.parentNode.remove()
    }

    const amounthandler = () =>{
        setAmount(100)
        console.log(100)
    }


return(
<div className='expense-item__description'>

                <h2  >{title}</h2>
                <h2  >{props.place}</h2>
                <div className='expense-item__price'>${amount}</div>
                <button onClick={clickhandler}>Click on me</button>
                <button onClick={deletehandler} >Delete</button>
                <button onClick={amounthandler} >100</button>
            </div>
)
}
export default ExpenseDetail