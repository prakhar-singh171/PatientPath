const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },

  
    password:{
        type:String,
        required:true
    },
    image:{
        type:String,
        default:''
    },
    gender:{
        type:String,
        default:'Not Selected'
    },
    dob:{
        type:String,
        default:'Not Selected'
    },
    phone:{
        type:String,
        default:'00000000000'
    },
  
    address:{
        type:Object,
        default:{line1:'',line2:""}
    }
   
    }
)

const userModel=mongoose.model('doctor',userSchema)

module.exports=userModel