import React, {useEffect, useState} from 'react'
import axios from "axios";

export default {
    title: 'API',
}

let settings = {
    withCredentials: true,
    headers: {
        'API-KEY': '89840915-003b-4683-9c71-791c31d58bf4',
    },

}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
        let promise = axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
        promise.then((res) => {
            setState(res.data)
        })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let promise = axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title: ' ✅React18'}, settings)
        promise.then((res) => {
            setState(res.data)
        })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = 'e4445465-a9a1-4c7d-a235-14338395b44a'
        axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoId}`, settings).then((res) => {
            setState(res.data)
        })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = '63932a05-eff2-4ac4-a228-6e8f15b076ba'
        axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoId}`, {title: 'Example Example Example Example'}, settings).then((res) => {
            setState(res.data)
        })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}