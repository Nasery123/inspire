import { AppState } from "../AppState.js"
import { Api } from "../services/AxiosService.js"
import { todoservice } from "../services/TodoService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawTodo() {
    console.log('drawing todos')
    // FIXME look at spellbook prepared spells filter and only show the non completed
    let template = `
        <div>
            Total: ${AppState.todos.length}
        <div>
    `
    // let Total = 0;

    AppState.todos.forEach(t => {
        template += t.TodosTemplate
        // if (todo.completed == false) {
        //     Total++;
        // }
    })
    // console.log('template', template)
    setHTML('todo-list', template)
    // document.getElementById('total').textContent = Total;
}
// function _drawTotalTodo() {
//     let todo = AppState.todos
//     let count = 0;
//     for (let i = 0; i < todo.length; i++) {
//         if (todo.completed == false) {
//             count++
//         }

//     }
//     return document.getElementById('totoal').textContent = count;
// }
function _drawTodoForm() {
    setHTML('todo-form', /*html*/`
        <form  class="mt-3"onsubmit="app.TodosController.createTodo()">

            <input name="description">

            <button type="submit" class="border-round text-white bg-success">add</button>
        </form>
    `)
}


// function _drawButton() {
//     if (AppState.account) {
//         setHTML('the-place-to-put-the-button', '<button class="btn btn-dark square" data-bs-toggle="modal" data-bs-target="#the-target-id" >OPEN THE MODAL</button>')
//     }

function _drawCurrentTodos() {
    if (AppState.account) {
        return `<div class="col-3">
        <label for="Name" class="form-label"></label>
        <input required type="text" class="form-control" id="todo" name="todo">
      </div>
      <button class="btn btn-primary" onsubmit="">Submit</button>
      <div> <input class="checkbox" type="checkbox"></input></div>
      <div> <input class="checkbox" type="checkbox"></input> </div>`
    }
    return
}

export class TodosController {
    constructor() {
        console.log('Todos controller')

        AppState.on('todos', _drawTodo)
        AppState.on('account', this.getTodosFromApi)
        AppState.on('account', _drawTodoForm)
        // AppState.on('account', _drawTotalTodo)
        // AppState.on('accont', _drawTotalTodo)


    }

    async createTodo() {
        try {
            window.event.preventDefault()
            const form = window.event?.target
            const formData = getFormData(form)
            console.log('here is the form data', formData)
            await todoservice.createTodo(formData)
            form.reset()
            //bootstrap.Modal.getOrCreateInstance('button-id').hide()

        } catch (error) {
            Pop.error(error)

        }

    }

    async getTodosFromApi() {
        try {
            await todoservice.getTodosFromApi()
        } catch (error) {
            Pop.error(error)
            console.log(error)

        }
    }
    async deletTodo(id) {
        try {
            const yes = await Pop.confirm("do you want to delet the Todo")
            if (!yes) {
                return
            }
            await todoservice.deletTodo(id)

        } catch (error) {
            Pop.error(error)

        }
    }
    async toggleTodos(id) {
        try {
            await todoservice.toggleTodo(id)
        } catch (error) {
            Pop.error(error)
        }
    }

}
