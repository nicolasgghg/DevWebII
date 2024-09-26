import { Router } from 'express'
import FotoController from '../controllers/foto.controller.js'
import { fotoIdValidator, fotoUpdateValidator, fotoValidator } from '../validators/foto.validator.js'

const router = Router()

router.get('/', FotoController.index)
router.post('/', fotoValidator, FotoController.create)
// router.get('/:id', fotoIdValidator, FotoController.show)
// router.put('/:id', fotoUpdateValidator, FotoController.update)
// router.delete('/:id', fotoIdValidator, FotoController.delete)

export default router