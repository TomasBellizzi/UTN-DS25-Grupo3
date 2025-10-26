import { Router } from 'express';
import * as eventoController from '../controllers/eventos.controller';
import { upload } from '../middlewares/comprobanteEntrada'
import { createEventoSchema, updateEventoSchema } from '../validations/evento.validation';
import { validate } from '../middlewares/validation.middleware';
import { authenticate, authorize } from '../middlewares/auth.middleware';
const router = Router();

router.get('/', 
    authenticate,
    eventoController.getAllEvento);

router.get('/:id',
    authenticate,
     eventoController.getEventoById);

router.post('/', 
    authenticate,
    authorize('ADMIN', 'ADMINISTRATIVO'),
    validate(createEventoSchema), eventoController.createEvento);

router.put('/:id', 
    authenticate,
    authorize('ADMIN', 'ADMINISTRATIVO'),
    validate(updateEventoSchema), eventoController.updateEvento);

router.post('/:id/venta', 
    authenticate, 
    upload.single("comprobante"), eventoController.registrarVenta);

router.delete('/:id', 
    authenticate,
    authorize('ADMIN'),
    eventoController.deleteEvento);

export const eventoRoutes = router;
