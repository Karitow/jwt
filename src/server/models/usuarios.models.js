import db from '../database/db.js';

export const register = ({ email, password, rol, lenguage }) => 
    db('INSERT INTO usuarios (id, email, password, rol, lenguage) VALUES (DEFAULT, $1, $2, $3, $4);',[email, password, rol, lenguage])

export const login = ({ email }) => db('SELECT email, password FROM usuarios WHERE email =$1;'[email])

export const obtenerUsuario = (email) => db('SELECT email, rol, lenguage, FROM usuario WHERE email =$1;', [email])
