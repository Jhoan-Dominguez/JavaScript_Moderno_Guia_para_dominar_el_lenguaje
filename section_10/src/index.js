import { saludar } from "./js/componentes";
import "./styles.css";

import {ToDo, ToDoList} from "./classes";

const toDoList = new ToDoList();
const task = new ToDo("Aprender JS");

toDoList.newToDo(task);

console.log({toDoList});
