import pkg from 'pg';

const { Pool } = pkg

const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    allowExisOnIdle:true,
    port: process.env.DB_PORT
}

const pool = new Pool(config)

const db = (query, values) => pool
    .query(query,values)
    .then(({ rows }) => rows)
    .catch((code,message) => {
        const error = { status: false, code, message }
        throw error
    })


export default db;