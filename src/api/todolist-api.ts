import axios from "axios";

let settings = {
    withCredentials: true,
    headers: {
        'API-KEY': '89840915-003b-4683-9c71-791c31d58bf4',
    },

}

export const TodolistAPI = {
    getTodolists: () => {
        const promise = axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
        return promise
    },
    createTodolists: (title: string) => {
        return axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title}, settings)
    },
    deleteTodolists: (todoId: string) => {
        return axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoId}`, settings)
    },
    updateTodolists: (todoId: string, title: string) => {
        return axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoId}`, {title}, settings)
    }
}