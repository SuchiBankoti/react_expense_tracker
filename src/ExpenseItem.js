import React from "react";

import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <ExpenseDate date={props.date} />
      <button onClick={() => props.deleteItem(props.title)}>Delete Item</button>
      <button onClick={() => props.updateAmount(props.title)}>
        Update amount
      </button>
    </div>
  );
};

export default ExpenseItem;
