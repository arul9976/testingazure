const express = require('express');
const path = require('path')

// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')
// const mongoose = require('mongoose');
// const cors = require('cors')
// const bodyParser = require('body-parser');
// const { ObjectId } = require('mongodb');
// const router = express.Router()

const app = express();
// const dotenv = require('dotenv')
// dotenv.config()

// connectDb()
// console.log('url', process.env.MONGODB_URI)

// const mongoURI = process.env.MONGODB_URI
// console.log('url', mongoURI)
// mongoose.connect(mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });


// const userSchema = new mongoose.Schema({
//     username: String,
//     subject: String,
//     message: String,
//     checked: Boolean,
//     TimeDate: {
//         date: String,
//         month: String,
//         hours: String,
//         minutes: String,
//         ampm: String,
//     }
// });

// const corsOptions = {
//     origin: '*',
//     credentials: true,
//     optionSuccessStatus: 200,
// }


// app.use(express.json())
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors(corsOptions))
app.use(express.static("public"))
// app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//     res.render("main")
// })



app.listen(8080, () => {
    console.log(`Listening PORT on ${8080}`)
})