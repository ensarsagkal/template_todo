"use strict"


const express=require("express")
const app=express()
require("dotenv").config()
const PORT=process.env.PORT || 8000


app.use(express.json())

require("express-async-errors")

//* TEMPLATE-EJS
app.set("view engine","ejs")

app.set("views","./public")

app.all("/",(req,res) =>{
    res.render('index')
})




app.use("/api",require("./app/routes/todo.router")) 
app.use("/views",require("./app/routes/todo.router")) 
app.use(require("./app/errorHandler"))
app.listen(PORT,()=>console.log("Running: https://127.0.0.1:" + PORT))