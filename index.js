import express from 'express'
import cors from 'cors'
import "dotenv/config"
import "./database/connectdb.js"
import  RoutesAuthor from './routes/author.routes.js'
import RoutesBook from './routes/book.routes.js'
import morgan from 'morgan'
const PORT =process.env.PORT || 3500
const app=express()

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
app.use("/api",RoutesAuthor)
app.use("/api",RoutesBook)



app.listen(PORT,()=>{
    console.log("servidor corriendo en el puerto" + PORT)
})