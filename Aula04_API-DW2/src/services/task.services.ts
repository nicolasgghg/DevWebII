import { CreateTaskDto, updateTaskDTO } from "../dtos/task.dto";
import { createTask, deleTaskById, findAllTasks, findTaskById, updateTaskById } from "../repository/task.repository";



export const createTaskService = async (data: CreateTaskDto) => {
    return await createTask(data)
}


export const findAllTasksService = async () => {
    return await findAllTasks()
}

export const findTaskByIdService = async (id: number) => {
    return await findTaskById(id)
}

export const deleteTaskByIdService = async (id: number) => {
    const task = await findTaskById(id)

    if (!task) throw new Error('Task nâo encontrado')

    return await deleTaskById(id)
}

export const updateTaskByIdService = async (id: number, data: updateTaskDTO) => {
    const task = await findTaskById(id)

    if (!task) throw new Error('Task nâo encontrado')

    return await updateTaskById(task.id, data)

}


