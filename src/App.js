
import React , {useState}from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from './components/NewExpenses/NewExpenses';

let DUMMY_EXPENSENS = [
     {
          
              id:"e1",
              title :"School fees",
              price : 500,
              date : new Date(2022, 5, 11)
    },

    {
          
              id:"e2",
              title :"Bus Rent",
              price: 1200,
              date : new Date(2022, 2, 11)
    },

     {
          
              id:"e3",
              title :"Tea Price",
              price : 50,
              date : new Date(2022, 6, 11)
    },
    
    {
          
              id:"e4",
              title :"college fees",
              price : 5000,
              date : new Date(2022, 1, 11)
    }
    
];

const App = () =>{
     
       const [expenses, setExpenses] = useState(DUMMY_EXPENSENS);

            const addExpensesHandler =(expense)=>{

               const updateExpensens = [expense, ...expenses];

          setExpenses(updateExpensens);
     };
     return (
          <div>
               <NewExpenses  onAddExpenses={addExpensesHandler}/>
               <Expenses item = {expenses}/>
          </div>
          
     );
     
}
export default App;