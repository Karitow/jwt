//importacion requerimiento jws
import jwt from 'jsonwebtoken';

const KEY = process.env.JWT_SECRET_KEY

export const jewSign = (payload) => jwt.sign(payload, KEY)

export const jwtVerify = (token) => jwt.verify(token, KEY)

export const jwtDecode = (token) => jwt.decode(token)