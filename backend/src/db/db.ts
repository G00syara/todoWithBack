import pgk from 'pg'

const { Pool } = pgk

export const pool = new Pool({
  user: 'postgres',
  password: 'admin',
  host: 'localhost',
  port: 5432,
  database: 'todolist',
})
