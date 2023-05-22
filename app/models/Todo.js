export class Todo {
    constructor(data) {
        this.id = data.id
        this.completed = data.completed || false
        this.description = data.description || true
        this.creatorId = data.creatorId

    }

    get TodosTemplate() {
        return /*html*/`

        <div class="col-4">
            <input type="checkbox" onclick="app.TodosController.toggleTodos('${this.id}')" ${this.completedCheckbox}>


            ${this.description}

            <p class="mdi mdi-delete text-white" onclick="app.TodosController.deletTodo('${this.id}')"></p>
        </div>`

    }
    // get CurrentTodoTemplate() {
    //     return /*html*/`
    //     <div class="col-3">
    //     <label for="Name" class="form-label"></label>
    //     <input required type="text" class="form-control" id="todo" name="todo">
    //   </div>
    //   <button class="btn btn-primary" onsubmit="">Submit</button>
    //   <div> <input class="checkbox" type="checkbox"></input>this is the todo you had </div>
    //   <div> <input class="checkbox" type="checkbox"></input>this is the todo you had </div>`
    // }


    get completedCheckbox() {
        return this.completed ? 'checked' : ''
    }


}
