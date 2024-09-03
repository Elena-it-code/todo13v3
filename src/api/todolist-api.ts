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
        return instance.post<ResponseType< {item: TodolistType} >>('todo-lists', {title})
    },
    deleteTodolists: (todoId: string) => {
        return instance.delete<ResponseType>(`todo-lists/${todoId}`)
    },
    updateTodolists: (todoId: string, title: string) => {
        return instance.put<ResponseType>(`todo-lists/${todoId}`, {title})
    }
}

// type
// Added Generic type
type ResponseType<T = {}> = { // T = {} - Generic parameter defaults.
    data: T
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


