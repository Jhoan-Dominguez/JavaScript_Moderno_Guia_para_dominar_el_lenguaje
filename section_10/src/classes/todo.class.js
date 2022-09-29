
export class ToDo {

    constructor(task) {

        this.task = task;
        this.id = new Date().getTime();
        this.complete = false;
        this.create = new Date();

    }
}