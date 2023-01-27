import React, { useState } from "react";
import { nanoid } from "nanoid";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  const [item, setItem] = useState(props.items);
  function deleteItem(title) {
    setItem((prev) => prev.filter((e) => e.title !== title));
  }
  function updateAmount(title) {
    setItem((prev) =>
      prev.map((e) => (e.title === title ? { ...e, amount: 100 } : e))
    );
  }
  const items = item.map((e) => (
    <ExpenseItem
      key={nanoid()}
      title={e.title}
      amount={e.amount}
      date={e.date}
      deleteItem={deleteItem}
      updateAmount={updateAmount}
    />
  ));
  return <div className="expenses">{items}</div>;
};

export default Expenses;
