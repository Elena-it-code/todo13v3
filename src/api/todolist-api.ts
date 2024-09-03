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
        return instance.get('todo-lists')
    },
    createTodolists: (title: string) => {
        return instance.post('todo-lists', {title})
    },
    deleteTodolists: (todoId: string) => {
        return instance.delete(`todo-lists/${todoId}`)
    },
    updateTodolists: (todoId: string, title: string) => {
        return instance.put(`todo-lists/${todoId}`, {title})
    }
}