import './ExpenseForm.css'

const ExpenseForm =()=>{
    const titlechangehandler=(event)=>{
        console.log(event.target.value)
    }
    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titlechangehandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number'/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31'/>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Delete</button>
                </div>
            </div>
        </form>
    )
}
export default ExpenseForm