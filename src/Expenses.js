import { nanoid } from "nanoid";
import ExpenseForm from "./ExpenseForm";
import ExpenseItem from "./ExpenseItem";

export default function Expenses(props) {
  const { items, addItems } = props;
  function deleteItem(title) {
    addItems((prev) => prev.filter((e) => e.title !== title));
  }
  function updateAmount(title) {
    addItems((prev) =>
      prev.map((e) => (e.title === title ? { ...e, amount: 100 } : e))
    );
  }
  function addNewItem(newItem) {
    addItems((prev) => {
      return [...prev, { ...newItem, id: nanoid() }];
    });
  }

  const displayitems = items.map((e) => (
    <ExpenseItem
      key={nanoid()}
      title={e.title}
      amount={e.amount}
      date={e.date}
      deleteItem={deleteItem}
      updateAmount={updateAmount}
    />
  ));
  return (
    <div>
      <ExpenseForm AddItem={addNewItem} />
      <div className="expenses">{displayitems}</div>
    </div>
  );
}
