"use strict"


const express=require("express")
const app=express()
require("dotenv").config()
const PORT=process.env.PORT || 8000
app.use(express.json())
require("express-async-errors")
//* TEMPLATE-EJS
app.set("view engine","ejs")

app.use(require("./app/routes/todo.router")) //& ROUTER SAYFASI OLUŞTUKTAN SONRA YOL BELİRLENECEK
app.use(require("./app/errorHandler")) //& ERROR SAYFASI OLUŞTUKTAN SONRA YOL BELİRLENECEK +
app.listen(PORT,()=>console.log("Running: https://127.0.0.1:" + PORT))