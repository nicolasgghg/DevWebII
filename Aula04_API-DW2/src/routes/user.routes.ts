import { Router } from "express";
import { createUser, deleteUserById, findAllUsers, findUserById, findUserByIdWithTasks, findUserByIdWithTasksById, updateUserById } from "../controllers/user.controler";
import { validate } from "../middlewares/validate.middleware";
import { CreateUserDto, updateUserDTO } from "../dtos/user.dto";

const router = Router()

router.get('/', findAllUsers)
router.get('/:id', findUserById)
router.get('/:id/tasks', findUserByIdWithTasks)
router.get('/:id/tasks/:idTask', findUserByIdWithTasksById)
router.post('/', validate(CreateUserDto), createUser)
router.delete('/:id', deleteUserById)
router.patch('/:id', validate(updateUserDTO), updateUserById)


export default router