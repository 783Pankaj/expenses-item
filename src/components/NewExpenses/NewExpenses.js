import React from "react";
import './NewExpenses.css';
import ExpensesForm from "./ExpensesForm";

const NewExpenses=(props)=>{

    const saveExpensesDataHandler = (enterdExpensensData) =>{
        const expenseData={
            ...enterdExpensensData,
            id: Math.random().toString()
        }
        console.log(expenseData);
        
        props. onAddExpenses(expenseData);
    }
    return(
        <div className="new-expenses">
           <ExpensesForm 
           onSaveExpensesData={saveExpensesDataHandler} />
        </div>
    );
}
export default NewExpenses;