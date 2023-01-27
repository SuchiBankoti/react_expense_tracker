import React from "react";

export default function Expenseitem(props) {
  const locationOfExpenditure = props.location;
  const expenseDate = new Date();
  const expensetitle = "car insurance";
  const expenseAmount = 294;
  return (
    <div className="expenseitem">
      <div>{expenseDate.toISOString()}</div>
      <div>{expensetitle}</div>
      <div>${expenseAmount}</div>
      <div>{locationOfExpenditure}</div>
    </div>
  );
}
