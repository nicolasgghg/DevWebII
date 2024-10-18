import { Request, Response } from "express";
import { createTaskService, deleteTaskByIdService, findAllTasksService, findTaskByIdService, updateTaskByIdService } from "../services/task.services";

export const createTask = async (req: Request, res: Response) => {
    try {
        const task = await createTaskService(req.body)
        return res.status(201).json(task)
    } catch (error) {
        return res.status(400).json({ message: 'Erro ao cadastrar', error })
    }
}

export const findAllTasks = async (_req: Request, res: Response) => {
    const tasks = await findAllTasksService()
    return res.status(200).json(tasks)
}

export const findTaskById = async (req: Request, res: Response) => {

    const task = await findTaskByIdService(Number(req.params.id))
    return res.status(200).json(task)
}

export const deleteTaskById = async (req: Request, res: Response) => {
    try {
        await deleteTaskByIdService(Number(req.params.id))
        return res.status(204).json({ message: "Deletado com sucesso" })
    } catch (error) {
        return res.status(400).json({ message: 'Erro ao Deletar', error })
    }
}

export const updateTaskById = async (req: Request, res: Response) => {
       try {
        const task = await updateTaskByIdService(Number(req.params.id), req.body)
        return res.status(200).json(task)
    } catch (error) {
        return res.status(400).json({ message: 'Erro ao atualizar Tarefa', error })
    }
}