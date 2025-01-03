const express=require('express')
const authController=require('../controllers/authController')
const adminController=require('../controllers/adminController')
const upload =require('../middlewares/multer')


const adminRouter=express.Router()

console.log('fdfdsfdsf')
adminRouter.post('/add-doctor',authController.protect,upload.single('image'),adminController.addDoctor)
adminRouter.post('/login',adminController.loginAdmin)
module.exports=adminRouter