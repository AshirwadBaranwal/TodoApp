import { useReducer, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Components/App.module.css";
import Todoinput from "./Components/Todoinput";
import TodoItems from "./Components/TodoItems";
import WelcomMessage from "./Components/WelcomeMessage";
import { TodoContextItems } from "./Store/todo-item-store";

//  const defaultTodoItems=[
//   {Name:"Sahil" , Date:" 10/06/2023"}
//  ]
const todoItemReducer = (currTodo, action) => {
  let newTodoItems = currTodo;

  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodo,
      { Name: action.payload.Name, Date: action.payload.Date },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodo.filter(
      (Item) => Item.Name !== action.payload.TodoName
    );
  }
  return newTodoItems;
};

function App() {
  // const [Todo, setTodo] = useState([]);

  const [Todo, dispatchTodo] = useReducer(todoItemReducer, []);

  const addNewItem = (Name, Date) => {
    // const newTodoArr = [...Todo, { Name: Name, Date: Date }];
    // setTodo(newTodoArr);

    // setTodo((currTodo) => [...currTodo, { Name: Name, Date: Date }]);

    const addItemAction = {
      type: "NEW_ITEM",
      payload: {
        Name,
        Date,
      },
    };
    dispatchTodo(addItemAction);
  };

  const handleDeleteItem = (TodoName) => {
    // const newTodoArrr = Todo.filter((Item) => Item.Name !== TodoName);
    // setTodo(newTodoArrr);

    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        TodoName,
      },
    };
    dispatchTodo(deleteItemAction);
  };

  return (
    <TodoContextItems.Provider value={{ Todo, handleDeleteItem, addNewItem }}>
      <div className={`container ${styles.containers}`}>
        <Todoinput></Todoinput>
        <WelcomMessage></WelcomMessage>
        <TodoItems></TodoItems>
      </div>
    </TodoContextItems.Provider>
  );
}

export default App;
