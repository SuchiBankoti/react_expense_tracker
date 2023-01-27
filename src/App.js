import React from "react";
import { nanoid } from "nanoid";
import Expenseitem from "./Expenseitme";

export default function App() {
  const expense = [];
  const location = "city";
  for (let i = 0; i < 100; i++) {
    expense.push(location);
  }
  const display = expense.map((e) => (
    <Expenseitem key={nanoid()} location={e} />
  ));
  return <div>{display}</div>;
}
