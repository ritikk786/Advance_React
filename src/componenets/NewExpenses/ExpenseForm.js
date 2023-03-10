import { useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm =()=>{
    const [enteredtitle , setenteredtitle ] = useState('')
    const [enteredAmount , setenteredAmount ] = useState('')
    const [enteredDate , setenteredDate ] = useState('')

    const amountchangehandler=(event)=>{
        setenteredAmount(event.target.value)
    }
    const titlechangehandler=(event)=>{
        setenteredtitle (event.target.value)
    }

    const datechangehandler=(event)=>{
        setenteredDate(event.target.value)
    }

    const printdetailhandler=(e)=>{
        e.preventDefault();
        const expenseData = {
            title :enteredtitle,
            amount:enteredAmount,
            date: new Date(enteredDate)
        }
        console.log(expenseData)
    }
    return (
        <form onSubmit={printdetailhandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titlechangehandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' onChange={amountchangehandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' onChange={datechangehandler}/>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add</button>
                </div>
            </div>
        </form>
    )
}
export default ExpenseForm