const express= require('express');
const router = express.Router();
const {getAllUsers,getUsersByName,postUser,userCleanup}=require('./Controllers');
const { route } = require('./Course-Router');

router.route("/")
    .get(getAllUsers)
    .post(postUser)
    .delete(userCleanup);
router.route("/cats")
.get(getUsersByName);

module.exports=router;
