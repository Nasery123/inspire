import { AppState } from "../AppState.js"
import { Todo } from "../models/Todo.js"
import { api } from "./AxiosService.js"



class TodoService {

    async createTodo(formData) {
        const res = await api.post('api/todos', formData)
        console.log('here is the homes', formData)

        console.log('this is the house', AppState.todos)
        const newTodo = new Todo(res.data)
        AppState.todos.push(newTodo)
        AppState.emit('todos')

    }


    async getTodosFromApi() {
        const res = await api.get('api/todos')
        console.log('here is the todo', res.data)
        //AppState.todos = res.data.map(t => new Todo(t))
        AppState.todos = res.data.map(t => new Todo(t))
    }
    async deletTodo(id) {
        const res = await api.delete(`api/todos/${id}`)
        AppState.todos = AppState.todos.filter(t => t.id != id)
    }
    async toggleTodo(id) {
        const todo = AppState.todos.find(t => t.id == id)
        todo.completed = !todo.completed

        const res = await api.put('api/todos/' + id, todo)
        console.log('toggle ', res.data)
    }



}

export const todoservice = new TodoService()
