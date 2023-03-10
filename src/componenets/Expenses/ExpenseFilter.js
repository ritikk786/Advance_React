import { useState } from "react"


const ExpenseFilter =()=>{
    const style={
        color:'white',
        fontWeight: '500',
    }
    const inputstyle={
        float: 'right',
    padding: '2px',
    width: '100px',
    textAlign: 'center',
    fontWeight: '900',
    borderRadius: '0.3rem'
    }
    const [filteredYear, setfilteredYear]=useState('2020')

    const dropdownchangehandler=(event)=>{
        setfilteredYear(event.target.value)
    }
    return(
        <div>
            <div>
                <label style={style}>Filter By year</label>
                <select value={filteredYear} onChange={dropdownchangehandler} style={inputstyle}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter