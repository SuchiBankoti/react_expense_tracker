import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  const [formdata, setFormdata] = useState({
    date: "",
    title: "",
    amount: "",
  });
  function handleChange(e) {
    setFormdata((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }
  return (
    <div className="form-container">
      <form className="form">
        <label>
          Date
          <input
            className="input"
            type="date"
            name="date"
            onChange={handleChange}
            value={formdata.date}
          />
        </label>
        <label>
          Title
          <input
            className="input"
            type="text"
            name="title"
            onChange={handleChange}
            value={formdata.title}
          />
        </label>
        <label>
          Amount
          <input
            className="input"
            type="number"
            name="amount"
            onChange={handleChange}
            value={formdata.amount}
          />
        </label>
      </form>
      <button onClick={() => props.AddItem(formdata)} className="submit-btn">
        Add Expense
      </button>
    </div>
  );
}
