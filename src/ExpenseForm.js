import React, { useState } from "react";

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
    <div>
      <form>
        <label>
          <input
            type="date"
            name="date"
            onChange={handleChange}
            value={formdata.date}
          />
        </label>
        <label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={formdata.title}
          />
        </label>
        <label>
          <input
            type="number"
            name="amount"
            onChange={handleChange}
            value={formdata.amount}
          />
        </label>
      </form>
      <br />
      <button onClick={() => props.AddItem(formdata)}>Submit</button>
    </div>
  );
}
