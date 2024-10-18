import { CreateUserDto, updateUserDTO } from "../dtos/user.dto";
import { createUser, deleUserById, findAllUsers, findUserByEmail, findUserById, findUserByIdWithTasks, findUserByIdWithTasksById, updateUserById } from "../repository/user.repository";
import bcrypt from 'bcrypt'
import jose from 'jose'


export const createUserService = async (data: CreateUserDto) => {
    const user = await findUserByEmail(data.email)
    if (user) throw new Error('E-mail já cadastrado!')

    const password = await bcrypt.hash(data.password, 10)

    return await createUser({ ...data, password })
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

export const findUserByIdWithTasksService = async (id: number) => {
    return await findUserByIdWithTasks(id)

}

export const findUserByIdWithTasksByIdService = async (id: number, idTask: number) => {
    return await findUserByIdWithTasksById(id, idTask)

}

export const authUserService = async (email: string, password: string) => {
    const user = await findUserByEmail(email)

    if (!user) throw new Error("Usuário não encontrado")

    const isValid = await bcrypt.compare(password, user.password)

    if (!isValid) throw new Error("Senha invalida")

    const payload  = {id: user.id, email: user.email}
    const secret = new TextEncoder().encode(`testedechavesecretagrande0001`)
    const alg = 'HS256'

    const token = await new jose.SignJWT(payload)
    .setProtectedHeader({alg})
    .setIssuedAt()
    .setIssuer('http://localhost:3000')
    .setSubject('user')
    .setExpirationTime('1h')
    .sign(secret)

    return token
}