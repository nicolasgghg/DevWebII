import { Request, Response } from "express";
import { createUserService } from "../services/user.services";

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await createUserService(req.body)
        return res.status(201).json(user)
    } catch (error) {
        return res.status(400).json({ message: 'Erro ao cadastrar', error})
    }
}