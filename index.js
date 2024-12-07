const express = require('express');
const app = express();

require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Arefin_Nahid:Ar.31122002@cyclexgo.drwko.mongodb.net/cyclex');

mongoose.connection.once('open',()=>{
    console.log('mongoose connected');
});

mongoose.connection.on('error',()=>{
    console.log('Mongoose connection failed '+error);
});

//user route
 const userRoute = require('./route/UserRoute');
 app.use('/api',userRoute);

//notification route
//const notifyRoute = require('./route/NotificationRoute');
//lapp.use('/api',notifyRoute);

//server
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${process.env.PORT}`);
});

