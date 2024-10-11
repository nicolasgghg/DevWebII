import { CreateUserDto, updateUserDTO } from "../dtos/user.dto";
import { createUser, deleUserById, findAllUsers, findUserByEmail, findUserById, updateUserById } from "../repository/user.repository";


export const createUserService = async (data: CreateUserDto) => {
    const user = await findUserByEmail(data.email)

    if (user) throw new Error('E-mail já cadastrado!')

    return await createUser(data)
}


export const findAllUsersService = async () => {
    return await findAllUsers()
}

export const findUserByIdService = async (id: number) => {
    return await findUserById(id)
}

export const deleteUserByIdService = async (id: number) => {
    const user = await findUserById(id)

    if (!user) throw new Error('Usuario nâo encontrado')

    return await deleUserById(id)
}

export const updateUserByIdService = async (id: number, data: updateUserDTO) => {
    const user = await findUserById(id)

    if (!user) throw new Error('Usuario nâo encontrado')

    return await updateUserById(user.id, data)

}