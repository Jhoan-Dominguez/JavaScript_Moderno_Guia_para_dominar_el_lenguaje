import { ToDo } from "./todo.class";

export class ToDoList {

    constructor() {

        // this.toDo = [];
        this.loadLocalStorage();
    }

    newToDo(newToDo) {

        this.toDo.push(newToDo);
        this.saveLocalStorage();
    }

    deleteToDo(id) {

        this.toDo = this.toDo.filter( toDo => toDo.id != id );
        this.saveLocalStorage();
    }

    checkComplete(id) {

        for(const task of this.toDo){

            if( task.id === id ) {

                task.complete = !task.complete
            }
        }
        this.saveLocalStorage();
    }
    
    deleteComplete() {

        this.toDo = this.toDo.filter( toDo => !toDo.complete );
        this.saveLocalStorage();
    }

    saveLocalStorage() {

        localStorage.setItem("toDo", JSON.stringify( this.toDo ));
    }

    loadLocalStorage() {

        this.toDo = (localStorage.getItem("toDo")) 
                    ? JSON.parse( localStorage.getItem("toDo") ) 
                    : [];
        this.toDo = this.toDo.map( ToDo.fromJson );
        // this.toDo = this.toDo.map( obj => ToDo.fromJson(obj) );
    }

}