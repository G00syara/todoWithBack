import { connection } from './src/db/db.sequelize.js'
import express, { urlencoded, json, NextFunction } from 'express'
// import { router } from './src/routes/routes.js'
import { router } from './src/routes/routes.sequelize.js'
const PORT = process.env.PORT || 8080

const app = express()

// app.use(express.json())
// app.use('/api', router)

app.use(json())
app.use(urlencoded({extended:true}))
app.use('/api', router)

app.use((err:Error, req: any, res: any, next: NextFunction)=> {
    res.status(500).json({message: err.message})
})

// Нужно, чтобы добавить БД в проект
// Надо поглубже разобраться


connection.sync().then(() => {
    console.log('database started');
    
}).catch((err)=>{
    console.log('err',err);

});

app.listen(PORT, () => console.log(`server started ssomething on port ${PORT}`))
