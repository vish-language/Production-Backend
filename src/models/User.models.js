import mongoose , {Schema} from "mongoose";
import jwt from 'jsonwebtoken'

import bcrypt from 'bcrypt'

const userSchema = new Schema(
{
    userName  : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        index : true,
        lowercase : true,
    },
    fullName  : {
        type : String,
        trim : true,
        index : true,
       
    },
    email  : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        lowercase : true,
    },
    avtar  : {
        type : String,// cloudnary url
        required : true,

    },
    CoverImage :  {
        type : String, 
    },
    watchHistory : [
        {
            type : Schema.Types.ObjectId,
            ref : "video"
        }
    ],
    password : {
        type : String,
        required : true
    },
    refreshToken : {
        type  : String,
    },
    
} , {timestamps: true})

userSchema.pre("save" , async function  (next) {
    if(!isModified(this.password)) return next();

    this.password = bcrypt.hash(this.password,10)
    next()
})

userSchema.method.isPasswordCorrect = async function (password) {
  await  bcrypt.compare( password ,  this.password ) 
}

userSchema.methods.generateAccessToken =  function () {
    return jwt.sign(
        {
            _id : this._id,
            email :  this.email,
            fullName : this.fullName,
            userName : this.userName, 
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn : process.env.ACCESS_TOKEN_EXPIRY,
        }
    )
}
userSchema.methods.generateRefreshToken =  function () {
    return jwt.sign(
        {
            _id : this._id,
           
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn : process.env.REFRESH_TOKEN_EXPIRY,
        }
    )
}
export const User =  mongoose.model("User" , userSchema)