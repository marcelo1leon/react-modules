import React, {useState} from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');

    //const [userInput, setUserInput] = useState({
    //    enteredTitle: '',
    //    enteredDate: '',
    //    enteredAmount: ''
    //});

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        //setUserInput({
        //    ...userInput,
        //    enteredTitle: event.target.value
        //});
        //if you depend on the previous state, use the following method
        //setUserInput((prevState) => {
        //    return { ...prevState, enteredTitle: event.target.value };
        // });
        console.log(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        //setUserInput({
        //    ...userInput,
        //    enteredDate: event.target.value
        //});
        console.log(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        //setUserInput({
        //    ...userInput,
        //    enteredAmount: event.target.value
        //});
        console.log(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        console.log(expenseData);
    };
    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onBlur={titleChangeHandler}/>
            </div>
            <div className="new-expense__control" onBlur={amountChangeHandler}>
                <label>Amout</label>
                <input type="number" min="0.01" step="0.01" />
            </div>
            <div className="new-expense__control" onBlur={dateChangeHandler}>
                <label>Date</label>
                <input type="date" min="2021-01-01" max="2022-12-31" />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;