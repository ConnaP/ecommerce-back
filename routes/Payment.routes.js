

const express=require('express')
const router=express.Router()


router.get('/',(req,res)=> {
    res.json({
      mensaje: 'ruta payment'
    })
  })

  module.exports=router