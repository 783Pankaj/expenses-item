import React, {useState} from "react";
import './ExpensesForm.css';

const ExpensesForm = (props) =>{

    const [enterdTitle, setEnteredTitle] = useState('');
    const [enterdAmount, setEnteredAmount] = useState('');
    const [enterdDate, setEnteredDate] = useState('');

    const titleChangeHandler =(event)=>{
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler =(event) =>{
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event)=>{
          event.preventDefault();

          const expenseData ={
            title: enterdTitle,
            amount: enterdAmount,
            date: new Date(enterdDate)
          }
          props.onSaveExpensesData(expenseData);
          console.log(expenseData);
          setEnteredTitle('');
          setEnteredAmount('');
          setEnteredDate('');
    }
     return(
        <form onSubmit={submitHandler}>
            <div className="new-expenses__controls">
                <div className="new-expenses__control">
                    <label>Title</label>
                    <input type="text" value={enterdTitle} onChange={titleChangeHandler} />
                </div>

                <div className="new-expenses__control">
                    <label>Amount</label>
                    <input type="number" value={enterdAmount} min="0.01" step="0.01"  onChange={amountChangeHandler}/>
                </div>

                <div className="new-expenses__control">
                    <label>Date</label>
                    <input type="date" value={enterdDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expenses__action">
                <button type="submit">Add Expense</button>
            </div>
        </form>
     );
}

export default ExpensesForm;