import { createUser, findUserByEmail } from "../repository/user.repository";

interface ICreateUserDTO {
    name: string
    email: string
    password: string
}

export const createUserService = async (data: ICreateUserDTO) => {
    const user = await findUserByEmail(data.email)

    if (user) throw new Error('E-mail já cadastrado!')

    return await createUser(data)
}
