import express from 'express';
import cors from 'cors';

import { usuariosLog } from './middlewares/usuarioLog.middleware.js'
import { errors, usuariosRouter } from './routers/index.js'

const app = express()
const PORT = process.env.PORT ?? 3000

app.use(cors());
app.use(express.json());
app.use(usuariosLog);
app.use(errors);
app.use(usuariosRouter);

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));

export default app;
