import { TodoContextItems } from "../Store/todo-item-store";
import styles from "./Todoinput.module.css";
import { useContext, useRef } from "react";

function Todoinput() {
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleAddItem = (event) => {
    event.preventDefault();
    const TodoName = todoNameElement.current.value;
    const TodoDate = todoDateElement.current.value;
    addNewItem(TodoName, TodoDate);
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
  };

  const { addNewItem } = useContext(TodoContextItems);

  return (
    <form onSubmit={handleAddItem} className={`row my-3 ${styles.inputarea}`}>
      <div className="col-5">
        <input
          className={styles.inputbox}
          type="text"
          placeholder="Enter your text"
          ref={todoNameElement}
          required
        />
      </div>
      <div className="col-5">
        <input
          className={styles.inputbox}
          type="date"
          ref={todoDateElement}
          required
        />
      </div>
      <div className="col-2">
        <button className={`btn btn-success ${styles.addbtn} `}>Add</button>
      </div>
    </form>
  );
}

export default Todoinput;
