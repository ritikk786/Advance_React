
function ExpensehtmlForm(props){
    const addhandler =(e)=>{
        e.preventDefault()
        console.log(document.getElementById('title').value)
    }
    return(
        <div>
            <form onSubmit={addhandler}>
            <label htmlFor='title' >Expense Title</label>
            <input type='text' id='title'></input>
            <br></br>
            <label htmlFor='amount' >Expense Amount</label>
            <input type='number' id='title' ></input>
            <br></br>
            <label htmlFor='title' > Expense Date</label>
            <input type='date' id='title' ></input>
            <br></br>
            <br></br>
            <button type="submit">Add to form</button>
            </form>
        </div>
    )
}
export default ExpensehtmlForm