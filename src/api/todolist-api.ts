import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '89840915-003b-4683-9c71-791c31d58bf4',
    },
})


export const TodolistAPI = {
    getTodolists: () => {
        return instance.get<TodolistType[]>('todo-lists')
    },
    createTodolists: (title: string) => {
        return instance.post<CreateTodolistResponseType>('todo-lists', {title})
    },
    deleteTodolists: (todoId: string) => {
        return instance.delete<DeleteUpdateTodolistResponseType>(`todo-lists/${todoId}`)
    },
    updateTodolists: (todoId: string, title: string) => {
        return instance.put<DeleteUpdateTodolistResponseType>(`todo-lists/${todoId}`, {title})
    }
}

// type
// Array<number> - дженерик, уточнили. Массив чего? Массив чисел. Индентична запись number[]
type CreateTodolistResponseType = {
    data: {
        item: TodolistType
    }
    messages: string[]
    fieldsErrors: string[]
    resultCode: number
}


type TodolistType = {
    id: string
    addedDate: Date // либо можно написать string
    order: number
    title: string
}

// создали один тип и для Delete и для Update, т.к. у низ приходит одного типа Response
type DeleteUpdateTodolistResponseType = {
    data: {}
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}

