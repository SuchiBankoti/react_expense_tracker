import { nanoid } from "nanoid";
import { React, useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseItem from "./ExpenseItem";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import SearchList from "./SearchList";

export default function Expenses(props) {
  const { items, addItems } = props;
  const [displayForm, setDisplayForm] = useState(false);
  const [allExpenses, setAllExpenses] = useState(false);
  const [year, setYear] = useState({
    selectedYear: "2021 ",
  });

  function deleteItem(title) {
    addItems((prev) => prev.filter((e) => e.title !== title));
  }

  function addNewItem(newItem) {
    addItems((prev) => {
      return [...prev, { ...newItem, id: nanoid() }];
    });
  }
  function handleChangeInYear(event) {
    setYear((prev) => {
      return { ...prev, selectedYear: event.target.value };
    });
  }
  const filteredItems = items.filter(
    (element) => element.date.split("-")[0] === year.selectedYear
  );

  const displayitems = items.map((e) => (
    <ExpenseItem
      key={nanoid()}
      title={e.title}
      amount={e.amount}
      date={e.date}
      deleteItem={deleteItem}
    />
  ));
  return (
    <div className="front-page">
      <ExpenseForm
        AddItem={addNewItem}
        setDisplayForm={setDisplayForm}
        displayForm={displayForm}
      />
      <div className="expenses">
        <ExpensesChart expenses={items} />

        <div className="all_filter_btns">
          <button
            className="all_expense_btn"
            onClick={() => setAllExpenses(true)}
          >
            All Expenses
          </button>
          <button className="filter_btn" onClick={() => setAllExpenses(false)}>
            Filter
          </button>
        </div>
        {!allExpenses ? (
          <SearchList
            handleChange={handleChangeInYear}
            filteredItems={filteredItems}
            year={year.selectedYear}
            deleteItem={deleteItem}
          />
        ) : (
          <div>{displayitems}</div>
        )}
      </div>
    </div>
  );
}
