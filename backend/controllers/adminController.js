const doctorModel = require("../models/doctorModel");
const catchAsync = require("../utils/catchAsync");
const bcrypt = require("bcrypt");
const validator = require("validator");
const cloudinary = require("cloudinary").v2;
const jwt=require('jsonwebtoken')
exports.addDoctor = catchAsync(async (req, res) => {
 

  const imageFile = req.file; // Access uploaded file
  console.log("Uploaded File Details:", imageFile);

  const { name, email, password, speciality, degree, experience, about, fees, address } = req.body;

  // Validate required fields
  if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
    return res.status(400).json({
      success: "fail",
      message: "All fields are required",
    });
  }

  // Validate email
  if (!validator.isEmail(email)) {
    return res.status(400).json({
      success: "fail",
      message: "Please enter a valid email",
    });
  }

  // Validate password strength
  if (password.length < 8) {
    return res.status(400).json({
      success: "fail",
      message: "Password must be at least 8 characters long",
    });
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
    const imageUrl = imageUpload.secure_url;
    console.log("Image uploaded to Cloudinary:", imageUrl);

    // Prepare doctor data
    const doctorData = {
      ...req.body,
      image: imageUrl,
      password: hashedPassword,
      address: JSON.parse(address), // Parse the address JSON string
      date: Date.now(),
    };

    // Create and save the doctor
    const newDoctor = new doctorModel(doctorData);
    await newDoctor.save();
    console.log("Doctor saved successfully:", newDoctor);

    // Send response
    res.status(201).json({
      status: "success",
      data: {
        doctor: newDoctor,
      },
    });
  
});

exports.loginAdmin=catchAsync( async(req,res)=>{

  const {email,password}=req.body;
  console.log(req.body)
  if(email===process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASSWORD){
    const token=jwt.sign(email+password,process.env.JWT_SECRET)
    res.status(200).json({
      status:'success',
      token
    })
  }
  else{
    res.status(201).json({
      status:'fail',
      message:'invalid credentials'
    })
  }

})

