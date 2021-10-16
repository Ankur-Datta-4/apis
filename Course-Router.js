const express= require('express');
const router = express.Router();
const {getAllCourses,getCourseByCat,postCourse,courseCleanup,getAllFields,getBestFit,getAlmostFit}=require('./Controllers');

router.route("/")
    .get(getAllCourses)
    .post(postCourse)
    .delete(courseCleanup)

router.route("/fields")
.get(getAllFields);

router.route("/almost")
    .get(getAlmostFit);
    
router.route("/final")
    .get(getBestFit);

module.exports=router;
