import { CreateUserDto, updateUserDTO } from '../dtos/user.dto'
import User from '../entities/user.entity'



export const createUser = async (data: CreateUserDto) => {
    return await User.create({ data })
}

export const findAllUsers = async () => {
    return User.findMany()
}


export const deleUserById = async (id: number) => {
    return User.delete({
        where: { id }
    })
}

export const updateUserById = async (id: number, data: updateUserDTO) => {
    return User.update({
        where: { id },
        data
    })
}


export const findUserByEmail = async (email: string) => {
    return User.findFirst({ where: { email } })
}

export const findUserById = async (id: number) => {

    return User.findFirst({ where: { id } })
}

export const findUserByIdWithTasks = async (id: number) => {
    return User.findFirst({
        where: { id },
        include: { tasks: true }
    })
}

export const findUserByIdWithTasksById = async (id: number, idTask: number) => {
    return User.findFirst({
        where: { id },
        include: {
            tasks: {
                where: { id: idTask }
            }
        }
    })
}