const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config(); 
const connectDB = require('./config/mongodb');
const connectCloudinary=require('./config/cloudinary')
const adminRouter=require('./routes/adminRoute')

// Load environment variables

const app = express();
const port = process.env.PORT || 4000;

connectDB();
connectCloudinary()
app.use(express.json());
app.use(cors());

app.use('/api/admin',adminRouter)

app.get('/', (req, res) => {
    res.send('API is working');
});

app.listen(port, () => console.log('Server is running on port', port));
