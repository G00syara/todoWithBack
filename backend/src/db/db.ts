import pgk from 'pg'
import 'dotenv/config'

const { Pool } = pgk


export const pool = new Pool({
  user: process.env.POSTGRESS_USER,
  password: process.env.POSTGRESS_PASSWORD,
  host: process.env.POSTGRESS_HOST,
  port: Number(process.env.POSTGRESS_PORT),
  database: process.env.POSTGRESS_DATABASE,
})
