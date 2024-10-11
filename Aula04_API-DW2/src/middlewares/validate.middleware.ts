import { plainToInstance } from "class-transformer"
import { NextFunction, Request, Response } from "express"
import { validate as classValidatorValidate } from "class-validator"

export const validate = (dto: any) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const data = plainToInstance(dto, req.body)
        const errors = await classValidatorValidate(data)


        if (errors.length > 0) {
            return res.status(400).json({ errors })
        }

        req.body = data
        next()

    }

}