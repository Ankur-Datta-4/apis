require('dotenv').config();
const express=require("express");
const App=express();
const Courses=require("./Course-Router")
const Users=require("./Users-Router");
const defaultRes=require('./middleware/defaults');
const errorHandler=require('./middleware/errorHandler');

const port=3000||process.env.PORT;
const connectDB=require("./Db");


App.use(express.json());
App.use("/courses",Courses);
App.use("/users",Users);
App.use(defaultRes);
App.use(errorHandler);
const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        App.listen(port,console.log(`Server Started Listening at ${port}`));        
    }
    catch(e){
        console.log(e);
    }
}

start();



/*
    require('dotenv').config();
const express=require('express'); 
const tasks= require('./router/tasks')
const connectDB = require('./db/connect');
const defaultRes=require('./middleware/defaults')
const app=express();
const defaultErr=require('./middleware/errorHandler')

//middleware
app.use(express.json())
app.use('/api/v1/tasks',tasks)
app.use(defaultRes)
app.use(defaultErr)

const port=3000 || process.env.PORT;

const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`Server Started Listening at ${port}`));        
    }
    catch(e){
        console.log(e)
    }
}

start()
*/