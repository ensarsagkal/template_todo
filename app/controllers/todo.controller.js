"use strict"

const Todo=require("../models/todo.model")

module.exports={
    list: async (req,res)=>{
        const data= await Todo.findAndCountAll()
        res.status(200).send({
            error:false,
            result:data
        })
      
    },
    create: async (req,res)=>{
        const data=await Todo.create(req.body)
        res.status(201).send({
            error:false,
            result:data.dataValues
        })
    },
    read:async(req,res)=>{
        const data=await Todo.findByPk(req.params.id)
        res.status(200).send({
            error:false,
            result:data
        })
    },
    update:async (req,res)=>{
        const data= Todo.update(req.body,{where:{id:req.params.id}})
        res.status(202).send({
            error:false,
            message:"updated",
            body: req.body, // Gönderdiğim veriyi göster.
            result: data,
            new: await Todo.findByPk(req.params.id) // Güncellenmiş veriyi de göster.

        })
    },
    delete: async (req,res)=>{
        const deletedData=await Todo.findByPk(req.params.id) //& silinen data'yı thunder'da göstermek için (AMA 200 STATUS CODE İLE ÇALIŞIR)
        const data= await Todo.destroy({where:{id:req.params.id}})
        console.log(data)
     
        if (data>0){
            res.status(200).send({
                data:deletedData
            })
        }else{
            res.errorStatusCode=404
            throw new Error ('not found')
        }
     }
}