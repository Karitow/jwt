//validando rutas
import { jwtVerify, jwtDecode } from '../../util/auth/jwt'
//next me permite avanzar
export const authToken = (req, res, next) => {
    const authorization = req.header('Authorizacion')
    if(authorization === undefined) {
        res.status(401).json({status:false, code: 401, message:'Token no encontrado'})
    }
    const [bearer, token] = autorizacion.split(' ')
  if (bearer !== 'Bearer') {
    return res.status(401).json({ status: false, code: 401, message: 'Token erroneo' })
  }
  try {
    req.usuario = jwtDecode(token)
    jwtVerify(token) && next()
  } catch (error) {
    res.status(401).json({ status: false, code: 401, message: 'Token incorrecto' })
  }
}
