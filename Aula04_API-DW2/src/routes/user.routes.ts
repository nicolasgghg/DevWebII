import { Router } from "express";
import { createUser, deleteUserById, findAllUsers, findUserById, updateUserById } from "../controllers/user.controler";
import { validate } from "../middlewares/validate.middleware";
import { CreateUserDto, updateUserDTO } from "../dtos/user.dto";

const router = Router()

router.get('/', findAllUsers)
router.get('/:id', findUserById)
router.post('/', validate(CreateUserDto), createUser)
router.delete('/:id', deleteUserById)
router.patch('/:id', validate(updateUserDTO), updateUserById)


export default router