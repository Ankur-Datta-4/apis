const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    courses:[String],
    points:[Number],
    isAlumni:{
        type:Boolean,
        default:false,
    }
    
    
})
const UserModel=mongoose.model("User",UserSchema);

const CourseSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    category:String,
    //expertise-purpose-learning modes-period
    tags:[String],
    objective:{
        type:String,
        maxlength:500
    },
    instructor:String,
    Alumni:[{type:String}]
})

const CourseModel=mongoose.model("Course",CourseSchema);

module.exports={
    UserModel,
    CourseModel
}