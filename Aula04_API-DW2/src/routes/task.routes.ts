import { Router } from "express";
import { createTask, deleteTaskById, findAllTasks, findTaskById, updateTaskById } from "../controllers/task.controler";
import { validate } from "../middlewares/validate.middleware";
import { CreateTaskDto, updateTaskDTO } from "../dtos/task.dto";

const router = Router()

router.post('/', validate(CreateTaskDto), createTask)
router.get('/', findAllTasks)
router.get('/:id', findTaskById)
router.patch('/:id', validate(updateTaskDTO), updateTaskById)
router.delete('/:id', deleteTaskById)


export default router