import React, { useState } from "react";
import { nanoid } from "nanoid";
import Expenses from "./Expenses";

export default function App() {
  const [expenses, setExpenses] = useState([
    {
      id: nanoid(),
      title: "Toilet Paper",
      amount: 94.12,
      date: "2020 - 07 - 14",
    },
    {
      id: nanoid(),
      title: "New TV",
      amount: 799.49,
      date: "2021 - 02 - 12",
    },
    {
      id: nanoid(),
      title: "Car Insurance",
      amount: 294.67,
      date: "2021 - 02 - 28",
    },
    {
      id: nanoid(),
      title: "New Desk (Wooden)",
      amount: 450,
      date: "2021 - 05 - 12",
    },
  ]);

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} addItems={setExpenses} />
    </div>
  );
}
