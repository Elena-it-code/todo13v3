import React, {useEffect, useState} from 'react'
import {TodolistAPI} from "../api/todolist-api";


export default {
    title: 'API',
}


export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
        TodolistAPI.getTodolists()
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = 'New Todolist Learn'
        TodolistAPI.createTodolists(title)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = 'd71ecd21-e0a8-4829-b9a2-ec01011e71e3'
        TodolistAPI.deleteTodolists(todoId)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = '63932a05-eff2-4ac4-a228-6e8f15b076ba'
        const title = 'UPDATE TITILE UPDATE TITLE'
        TodolistAPI.updateTodolists(todoId, title)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}