import User from '../entities/user.entity'

interface ICreateUserDTO {
    name: string
    email: string
    password: string
}

export const createUser = async (data: ICreateUserDTO) => {
    return await User.create({ data })
}

export const findUserByEmail = async (email: string) => {
    return User.findFirst({ where: { email } })
}