const {UserModel, CourseModel}=require("./Models");
const asyncWrap=require("./middleware/asyncWrapper");



const getAllCourses=asyncWrap(async(req,res)=>{
    const courses=await CourseModel.find({})
    res.status(200).json({courses});
})

const getCourseByCat=asyncWrap(async(req,res)=>{
    const searchReg=new RegExp(`${req.params}.`,"i");
    const courses=await CourseModel.find({title:searchReg});
    res.status(200).json({courses})
})

const postCourse=asyncWrap(async(req,res)=>{
    const courses=await CourseModel.create(req.body);
    res.status(201).json({courses});
})

const courseCleanup=asyncWrap(async(req,res)=>{
    const course=await CourseModel.deleteMany({});
    
    res.status(201).json({course})
})

const getAllUsers=asyncWrap(async(req,res)=>{
    const users=await UserModel.find({})
    res.status(200).json({users});
})

const getUsersByName=asyncWrap(async(req,res)=>{
    const searchReg=new RegExp(`${req.params}.`,"i");
    const users=await UserModel.find({title:searchReg});
    res.status(200).json({users});
})

const postUser=asyncWrap(async(req,res)=>{
    const users=await UserModel.create(req.body);

    res.status(201).json({users});
})

const userCleanup=asyncWrap(async(req,res)=>{
    const users=await UserModel.deleteMany({});
    
    res.status(201).json({users})
})


//needed
const getAllFields=asyncWrap(async(req,res)=>{
    const fields=await CourseModel.distinct("category")
    res.status(200).json(fields)
})


//too much exact match
const getBestFit=asyncWrap(async(req,res)=>{
    const userNeeds=req.body.needs;
    const courses=await CourseModel.find({tags:userNeeds});
    res.status(200).json(courses)
})

//getCoursesByTracks
const getAlmostFit=asyncWrap(async(req,res)=>{
    const userNeeds=req.body.needs;
    //const courses=await CourseModel.find({tags:{$in:[userNeeds[0]]}});
    const courses=await CourseModel.find({$and:[
        {tags:{$in:[userNeeds[0]]}},{tags:{$in:[userNeeds[1]]}},{tags:{$in:[userNeeds[2]]}}
    ]})
    res.status(200).json(courses);
})
module.exports={
    getAllCourses,
    getCourseByCat,
    postCourse,
    getAllUsers,
    getUsersByName,
    postUser,
    userCleanup,
    courseCleanup,
    getAllFields,
    getBestFit,
    getAlmostFit
}