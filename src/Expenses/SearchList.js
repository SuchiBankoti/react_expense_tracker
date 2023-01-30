import React from "react";
import ExpenseItem from "./ExpenseItem";
import { nanoid } from "nanoid";

export default function SearchList(props) {
  const { handleChange, filteredItems, year, deleteItem } = props;
  const searchResults = filteredItems.map((e) => (
    <ExpenseItem
      key={nanoid()}
      title={e.title}
      amount={e.amount}
      date={e.date}
      deleteItem={deleteItem}
    />
  ));
  return (
    <div>
      <label>
        By year:
        <select value={year} onChange={handleChange}>
          <option value="2019 ">2019</option>
          <option value="2020 ">2020</option>
          <option value="2021 ">2021</option>
          <option value="2022 ">2022</option>
        </select>
      </label>
      {filteredItems.length === 0 ? (
        <p style={{ color: "white" }}>No results</p>
      ) : (
        <div>{searchResults}</div>
      )}
    </div>
  );
}
