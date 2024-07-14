
const mongoose = require("mongoose");
const { number, boolean } = require("zod");
mongoose.connect("mongodb+srv://admin:Punit1234@cluster0.gzacrdj.mongodb.net/CouseSellingApp")

const AdminSchema =  new mongoose.Schema({
    username : String,
    password : String,
})


const UserSchema = new mongoose.Schema({
    username: String,
    password : String,
    purchasedCourse : [{
        type : mongoose.Schema.Types.ObjectId;
        ref : "Course"
    }]
})


const CourseSchema = new mongoose.Schema({
    title : String,
    discreption : String,
    imagelink : String,
    price : Number,
    islaunch : Boolean
})


const Admin = mongoose.model('Admin', AdminSchema);
const User  = mongoose.model('Admin', UserSchema);
const Course  = mongoose.model('Admin', CourseSchema);

module.exports({
    Admin,
    User,
    Course,
})
