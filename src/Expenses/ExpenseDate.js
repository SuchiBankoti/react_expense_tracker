import React from "react";
import "./ExpenseDate.css";
export default function ExpenseDate(props) {
  const { date } = props;
  const [year, month, day] = date.split("-");

  return (
    <div className="expense-date">
      <div className="expense-date__month">
        {Intl.DateTimeFormat("en", { month: "long" }).format(new Date(month))}
      </div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
