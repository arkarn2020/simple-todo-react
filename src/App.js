import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";

export default function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const addItem = (e) => {
    e.preventDefault();
    const newItem = { id: uuidv4(), text: item, complete: false };
    setList([...list, newItem]);
    setItem("");
  };

  const deleteItem = (id) => {
    setList(list.filter((listItem) => listItem.id !== id));
  };

  const toggleItem = (id) => {
    let toggled = list.map((listItem) =>
      listItem.id === id
        ? { ...listItem, complete: !listItem.complete }
        : { ...listItem }
    );
    setList(toggled);
  };

  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <div className="App">
      <h3>todo-app</h3>
      <form onSubmit={addItem}>
        <input
          autoFocus
          type="text"
          placeholder="add an item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        &nbsp;
        <button type="submit">Add</button>
      </form>
      <hr />
      <ul>
        {list.map((listitem) => {
          return (
            <li
              key={listitem.id}
              style={{
                padding: "5px",
                margin: "5px",
                width: "250px",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                border: "1px solid black"
              }}
            >
              <span
                onClick={() => toggleItem(listitem.id)}
                style={{
                  cursor: "pointer",
                  color: listitem.complete ? "palevioletred" : "green"
                }}
              >
                {" "}
                {listitem.text}{" "}
              </span>
              <span
                onClick={() => deleteItem(listitem.id)}
                style={{
                  marginLeft: "auto",
                  cursor: "pointer",
                  fontSize: "12px"
                }}
              >
                {" "}
                remove{" "}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

