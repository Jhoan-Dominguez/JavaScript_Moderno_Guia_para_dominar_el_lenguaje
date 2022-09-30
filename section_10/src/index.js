import { saludar } from "./js/componentes";
import "./styles.css";

import {ToDo, ToDoList} from "./classes";
import { createToDoHTML } from "./js/componentes";

export const toDoList = new ToDoList();
toDoList.toDo.forEach( createToDoHTML );

console.log({toDoList});
// toDoList.toDo.forEach( toDo => createToDoHTML( toDo ) );

// const task = new ToDo("Aprender JS");
// toDoList.newToDo(task);
// console.log({toDoList});
// createToDoHTML( task );

// setTimeout(() => {
//     localStorage.removeItem("mi-key");
// }, 1500);