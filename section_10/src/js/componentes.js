
//Referencias en el HTML
divToDoList = document.querySelector(".todo-list");

export const createToDoHTML = (ToDo) => {

    const HTMLToDo = `<li class="completed" data-id="abc">
        <div class="view">
            <input class="toggle" type="checkbox" checked>
            <label>${ ToDo.task }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
        </li>`;

    const div = document.createElement("div");
    div.innerHTML = HTMLToDo;

    divToDoList.append(div);

    return div;
}