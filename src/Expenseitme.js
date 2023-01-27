import React from "react";

export default function Expenseitem(props) {
  const locationOfExpenditure = props.location;
  const expenseDate = new Date();
  const expensetitle = "car insurance";
  const expenseAmount = 294;
  function Expensedetails() {
    return (
      <>
        <div>{expensetitle}</div>
        <div>${expenseAmount}</div>
      </>
    );
  }
  return (
    <div className="expenseitem">
      <div>{expenseDate.toISOString()}</div>
      <Expensedetails />
      <div>{locationOfExpenditure}</div>
    </div>
  );
}
