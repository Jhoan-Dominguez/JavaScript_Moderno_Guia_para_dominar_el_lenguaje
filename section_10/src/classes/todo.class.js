
export class ToDo {

    static fromJson ( {id, task, complete, create} ) {

        const tempToDo = new ToDo( task );

        tempToDo.id = id;
        tempToDo.complete = complete;
        tempToDo.create = create;

        return tempToDo;
    }

    constructor(task) {

        this.task = task;
        this.id = new Date().getTime();
        this.complete = false;
        this.create = new Date();

    }
}