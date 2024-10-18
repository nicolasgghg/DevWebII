import { Request, Response } from "express";
import { createUserService, deleteUserByIdService, findAllUsersService, findUserByIdService, findUserByIdWithTasksByIdService, findUserByIdWithTasksService, updateUserByIdService } from "../services/user.services";

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await createUserService(req.body)
        return res.status(201).json({...user, password:undefined})
    } catch (error) {
        return res.status(400).json({ message: 'Erro ao cadastrar', error })
    }
}

export const findAllUsers = async (_req: Request, res: Response) => {
    const users = await findAllUsersService()
    return res.status(200).json(users)
}

export const findUserById = async (req: Request, res: Response) => {

    const user = await findUserByIdService(Number(req.params.id))
    return res.status(200).json(user)
}

export const deleteUserById = async (req: Request, res: Response) => {
    try {
        await deleteUserByIdService(Number(req.params.id))
        return res.status(204).json({ message: "Deletado com sucesso" })
    } catch (error) {
        return res.status(400).json({ message: 'Erro ao Deletar', error })
    }
}

export const updateUserById = async (req: Request, res: Response) => {
    try {
        const user = await updateUserByIdService(Number(req.params.id), req.body)
        return res.status(200).json(user)
    } catch (error) {
        return res.status(400).json({ message: 'Erro ao atualizar usuário', error })
    }
}

export const findUserByIdWithTasks = async (req: Request, res: Response) => {
    const id = Number(req.params.id)

    if(isNaN(id)){
        return res.status(400).json("Id invalido")
    }

    const user = await findUserByIdWithTasksService(id)
    return res.status(200).json(user)
}

export const findUserByIdWithTasksById = async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const idTask = Number(req.params.idTask)


    if(isNaN(id)){
        return res.status(400).json("Id user invalido")
    }

    if(isNaN(idTask)){
        return res.status(400).json("Id Task invalido")
    }


    const user = await findUserByIdWithTasksByIdService(id, idTask)

    return res.status(200).json(user)
}