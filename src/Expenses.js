import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

export default function Expenses(props) {
  const { items, addItems } = props;
  const [searchDate, setsearchDate] = useState([]);
  const [searchItems, setSearchItems] = useState([]);

  function deleteItem(title) {
    addItems((prev) => prev.filter((e) => e.title !== title));
  }

  function addNewItem(newItem) {
    addItems((prev) => {
      return [...prev, { ...newItem, id: nanoid() }];
    });
  }
  useEffect(() => {
    function filter() {
      setSearchItems(
        items.filter((element) => element.date.split("-")[0] === searchDate[0])
      );
    }
    filter();
  }, [searchDate]);

  const searchResults = searchItems.map((e) => (
    <ExpenseItem
      key={nanoid()}
      title={e.title}
      amount={e.amount}
      date={e.date}
      deleteItem={deleteItem}
    />
  ));

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
      <ExpenseForm AddItem={addNewItem} />
      <div className="expenses">
        <form>
          <label>
            filter by year:
            <input
              type="text"
              value={searchDate}
              onChange={(e) => setsearchDate([e.target.value])}
            ></input>
          </label>
        </form>
        <div>
          {displayitems.length === 0 ? (
            <div style={{ color: "white" }}>No expense to show</div>
          ) : searchItems.length > 0 ? (
            searchResults
          ) : (
            displayitems
          )}
        </div>
        {displayitems.length === 1 ? (
          <div style={{ color: "white" }}>
            {" "}
            Only single Expense here.Please add more expenses
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
