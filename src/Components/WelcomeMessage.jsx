import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoContextItems } from "../Store/todo-item-store";
function WelcomMessage() {
  const { Todo } = useContext(TodoContextItems);

  return (
    Todo.length === 0 && (
      <div className={styles.Welcome_container}>
        <h1>Nothing to do , Enjoy Your day😊</h1>
      </div>
    )
  );
}

export default WelcomMessage;
