import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

export default function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <h2 className="expense-item__title">{props.title}</h2>
      <div className="expense-item__price">${props.amount}</div>
      <button
        onClick={() => props.deleteItem(props.title)}
        className="delete-item"
      >
        X
      </button>
    </div>
  );
}
