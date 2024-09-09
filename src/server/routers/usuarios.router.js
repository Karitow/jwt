import { Router } from 'express';
//importando todas las funciones (*)
import * as usuariosController from '../controllers/usuariosController.js';
import { verificarToken } from '../middlewares/usuario.middleware.js';

const router = Router();

//datos para registrar
router.post('/register', usuariosController.findAll)
//datos para validación
router.post('./login', usuariosController.login)
//datos de registro
router.get('/usuarios', verificarToken, usuariosController.obtenerUsuario)

export default router;