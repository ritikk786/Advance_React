import { useState } from "react"
import './ExpenseFilter.css'


const ExpenseFilter =(props)=>{
   
    
    

    const dropdownchangehandler=(event)=>{
        props.filter(event.target.value)
    }
    return(
        <div>
            <div>
                <label className="label">Filter By year</label>
                <select className="select" value={props.value} onChange={dropdownchangehandler} >
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