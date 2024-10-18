import { Router } from "express";
import userRoutes from './user.routes'
import taskRoutes from './task.routes'

const routes = Router()

routes.use('/users', userRoutes)
routes.use('/tasks', taskRoutes)

export default routes