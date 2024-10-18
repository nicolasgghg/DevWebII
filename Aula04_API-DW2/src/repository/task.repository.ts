import { CreateTaskDto, updateTaskDTO } from '../dtos/task.dto'
import Task from '../entities/task.entity'



export const createTask = async (data: CreateTaskDto) => {
    return await Task.create({ data })
}

export const findAllTasks = async () => {
    return Task.findMany()
}


export const deleTaskById = async (id: number) => {
    return Task.delete({
        where: { id }
    })
}

export const updateTaskById = async (id: number, data: updateTaskDTO) => {
    return Task.update({
        where: { id },
        data
    })
}

export const findTaskById = async (id: number) => {

    return Task.findFirst({ where: { id } })
}