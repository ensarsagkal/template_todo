"use strict";

const {Sequelize,DataTypes}=require("sequelize")
const sequelize= new Sequelize('sqlite:./db.sqlite3')
const Todo=sequelize.define("todos",{
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:DataTypes.TEXT,
    priority:{
        type:DataTypes.INTEGER, //? type: DataTypes.TINYINT, // postgresql desteklemiyor.
        allowNull:false,
        defaultValue:0

    },
    isDone:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false

    }
})
//! sequelize.sync()
//! sequelize.sync({alter:true})
sequelize.authenticate()
.then(()=>console.log("*DB Connected*"))
.catch(()=>console.log("*DB Not Connected*"))
module.exports = Todo