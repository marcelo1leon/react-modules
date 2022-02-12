import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  let expensesList = []; //Defino la lista de items

  //Agrego los items recibidos por param a la lista definida previamenrte
  props.expenses.forEach((item) => {
    expensesList.push(
      <ExpenseItem
        id={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    );
  });

  return (
    <div className="expenses">
      {expensesList}
    </div>
  );

  
    /* return (
      <div className="expenses">
      
      <ExpenseItem    
      title={props.expenses[0].title}
      amount={props.expenses[0].amount}
      date={props.expenses[0].date}
      />
      <ExpenseItem    
      title={props.expenses[1].title}
      amount={props.expenses[1].amount}
      date={props.expenses[1].date}
      />
      <ExpenseItem    
      title={props.expenses[2].title}
      amount={props.expenses[2].amount}
      date={props.expenses[2].date}
      />
      <ExpenseItem    
      title={props.expenses[3].title}
      amount={props.expenses[3].amount}
      date={props.expenses[3].date}
      />
    </div>
 );*/
  
}
export default Expenses;
