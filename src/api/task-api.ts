import axios from "axios";

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': '89840915-003b-4683-9c71-791c31d58bf4',
    },
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    ...settings // деструктуризация, возьми и раскукож объект settings, и все что в нем находится попадет сюда
})


export const TaskAPI = {
    getTasks: (todoId: string) => {
        return instance.get<GetTasksResponse>(`todo-lists/${todoId}/tasks`)
    },
    createTask: (todoId: string, title: string) => {
        return instance.post<ResponseType>(`todo-lists/${todoId}/tasks`, {title})
    },
    deleteTask: (todoId: string, taskId: string) => {
        return instance.delete<ResponseType<{}>>(`todo-lists/${todoId}/tasks/${taskId}`)
    },
    updateTask: (todoId: string, taskId: string, model: UpdateTaskRequestType) => {
        return instance.put<ResponseType>(`todo-lists/${todoId}/tasks/${taskId}`, model)
    }
}


type GetTasksResponse = {
    items: TaskType[];
    totalCount: number;
    error: string | null;
}

export type TaskType = {
    description: string | null
    title: string
    status: number
    priority: number
    startDate: string | null
    deadline: string | null
    id: string
    todoListId: string
    order: number
    addedDate: Date // либо можно написать string
}

type ResponseType<T = { item: TaskType }> = {
    data: T
    messages: string[]
    fieldsErrors: string[]
    resultCode: number
}

type UpdateTaskRequestType = {
    title: string
    description: string
    status: number
    priority: number
    startDate: string
    deadline: string
}

