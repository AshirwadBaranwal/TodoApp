import { useContext } from "react";
import { TodoContextItems } from "../Store/todo-item-store";
import TodoItem from "./Todoitem";

const TodoItems = () => {
  const { Todo } = useContext(TodoContextItems);

  return Todo.map((item) => <TodoItem Todo={item}></TodoItem>);
};

export default TodoItems;
