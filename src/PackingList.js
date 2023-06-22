import Item from "./Item";
import { useState } from "react";
export default function PackingList({
  items,
  onDelete,
  onToggleItem,
  onClear,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItem;
  if (sortBy === "input") sortedItem = items;
  if (sortBy === "description")
    sortedItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItem.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDelete={onDelete}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="action">
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed stats</option>
        </select>
        <button onClick={onClear}>Clear List</button>
      </div>
    </div>
  );
}
