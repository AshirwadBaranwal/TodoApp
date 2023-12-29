import { TodoContextItems } from "../Store/todo-item-store";
import styles from "./TodoItem.module.css";
import { useContext } from "react";


const TodoItem = ({ Todo }) => {
  const { handleDeleteItem } = useContext(TodoContextItems);

  return (
    <div className={`row my-3 bg-white ${styles.itembox}`} key={Todo.Name}>
      <div className={`col-5 ${styles.para}`}>{Todo.Name}</div>
      <div className={`col-5 ${styles.para}`}>{Todo.Date}</div>
      <div className="col-2">
        {" "}
        <button
          className={`btn btn-danger ${styles.mybtn}`}
          onClick={() => handleDeleteItem(Todo.Name)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
