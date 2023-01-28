import React from "react";

export default function ExpenseForm() {
  return (
    <div>
      <form>
        <label>
          <input type="date" onChange={() => console.log("change")} />
        </label>
        <label>
          <input type="text" onChange={() => console.log("change")} />
        </label>
        <label>
          <input type="number" onChange={() => console.log("change")} />
        </label>
      </form>
      <br />
      <button>Submit</button>
    </div>
  );
}
