import express from 'express'
import { router } from './src/routes/routes.js'
const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use('/api', router)

app.listen(PORT, () => console.log(`server started ssomething on port ${PORT}`))
