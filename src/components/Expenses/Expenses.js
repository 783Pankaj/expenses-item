import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import React from 'react';
import Card from '../UI/Card';
const Expenses=(props)=>{
    return(
       
            <Card className='expenses'> 
            {
                  props.item.map(
                        expenses=>(
                              <ExpenseItem
                              date = {expenses.date}
                              title = {expenses.title}
                              price = {expenses.price} />
                        )
                  )
            }

          </Card>  
      
    );
}

export default Expenses;