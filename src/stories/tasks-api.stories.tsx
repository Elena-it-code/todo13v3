import React, {useEffect, useState} from 'react'
import {TaskAPI} from "../api/task-api";


export default {
    title: 'API',
}


export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = '61a185ef-0df6-4c3f-a3f3-fea0f8da4cbf'
        TaskAPI.getTasks(todoId)
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const CreateTask  = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = '61a185ef-0df6-4c3f-a3f3-fea0f8da4cbf'
        const title = '9999999-999999'
        TaskAPI.createTask(todoId, title).then((res)=>{
            setState(res.data)
        })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTask  = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = 'c7189795-bc90-4487-b631-85c334e420a9'
        const taskId = 'f4d4fe31-65da-480d-8031-de017942e805'
        TaskAPI.deleteTask(todoId, taskId).then((res)=>{
            setState(res.data)
        })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTasksTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = 'c4e0ea18-72e9-4e3f-b3d3-7b0763fd3b4b'
        const taskId = '8a5d671e-02f8-4d00-84f9-92378c939ef9'
        TaskAPI.updateTask(todoId, taskId, {
            title: '9999999999999999999999999999',
            deadline: '',
            description: '',
            priority: 0,
            status: 1,
            startDate: ''
        }).then((res)=>{
            setState(res.data)
        })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}