import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const[userInput,SetUserInput] = useState({
  // enteredTitle:'',
  // enteredAmount:'',
  // enteredDate:'',
  // });

  function titlechangehandler(event) {
    setEnteredTitle(event.target.value);
    // setUseInput({

    //   ...userInput,
    //   enteredTitle: event.target.value,
    // })

    // function setUserInput((prevState)
    // {

    //   return{...prevState,enteredTitle:event.target.value};
    // });
  }

  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
    // setUseInput({

    //   ...userInput,
    //   enteredAmount: event.target.value,
    // })
  }

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
    // setUseInput({

    //   ...userInput,
    //   enteredDate: event.target.value,
    // })
  }

  function submitHandler(event) {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

   
   props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titlechangehandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>

          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expenses</button>
      </div>
    </form>
  );
}

export default ExpenseForm;