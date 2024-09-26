import { Router } from 'express'
import produtoRouter from './produto.route.js' 
import fotoRouter from './foto.route.js' 

const router = Router()

router.use('/produtos', produtoRouter)
router.use('/fotos', fotoRouter)

export default router