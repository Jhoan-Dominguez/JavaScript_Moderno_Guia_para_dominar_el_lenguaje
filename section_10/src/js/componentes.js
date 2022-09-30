
import { ToDo, ToDoList } from "../classes";
import { toDoList } from "../index";

//Referencias en el HTML
const divToDoList       = document.querySelector(".todo-list");
const txtInput          = document.querySelector(".new-todo");
const btnDelCompleted   = document.querySelector(".clear-completed");
const ulFilter          = document.querySelector(".filters");
const anchorFilter      = document.querySelectorAll(".filtro");

export const createToDoHTML = (ToDo) => {

    const HTMLToDo = `
    <li class="${ (ToDo.complete) ? "completed" : "" }" data-id="${ToDo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${ (ToDo.complete) ? "checked" : "" } >
            <label>${ ToDo.task }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement("div");
    div.innerHTML = HTMLToDo;

    divToDoList.append(div.firstElementChild);

    return div.firstElementChild;
}


//Eventos
txtInput.addEventListener("keyup", (event) => {
    //console.log({event});
    if( event.keyCode === 13 && txtInput.value.length > 0){
        
        const newTask = new ToDo(txtInput.value);
        toDoList.newToDo( newTask );

        createToDoHTML( newTask );
        txtInput.value = "";
        // console.log({toDoList});
    }
});

divToDoList.addEventListener("click", (event) => {

    const nameElement = event.target.localName;
    const toDoElement = event.target.parentElement.parentElement;
    const toDoId = toDoElement.getAttribute("data-id");

    if( nameElement.includes("input") ) {
        
        toDoList.checkComplete( toDoId );
        toDoElement.classList.toggle("completed");
    
    } else if( nameElement.includes("button") ) {

        toDoList.deleteToDo( toDoId );
        divToDoList.removeChild(toDoElement);
    }
    
});

btnDelCompleted.addEventListener("click", (event) => {

    toDoList.deleteComplete();

    for(let i = divToDoList.children.length-1; i >= 0; i-- ) {

        const element = divToDoList.children[i];

        if( element.classList.contains("completed") ) {

            divToDoList.removeChild(element);
        }
    }
});

ulFilter.addEventListener("click", (event) => {

    const filter = event.target.text;

    if(!filter) {return;};
    anchorFilter.forEach( elem => elem.classList.remove("selected") );
    event.target.classList.add("selected");

    for( const element of divToDoList.children){

        element.classList.remove("hidden");
        const complete = element.classList.contains("completed");

        switch( filter ) {
            case "Pendientes": 
                if ( complete ) {
                    element.classList.add("hidden");
                }
                break;

            case "Completados": 
                if ( !complete ) {
                    element.classList.add("hidden");
                }
                break;
        }
    }
})