import mongoose , {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new Schema({
    
    videoFile : {
        type : String , // taken from cloudnary url
        required  : true
    },
    thumbnail : {
        type : String , // taken from cloudnary url
        required  : true
    },
    tittle : {
        type : String , 
        required  : true
    },
    views : {
        type : Number , 
        default : 0,
    },
    isPublished : {
        type : Boolean , 
        default : true,
    },
    discription  : {
        type : String , 
        
        required  : true
    },
    duration : {
        type : Number , // taken from cloudnary url
        required  : true
    },
    owner : [
        {
            type : Schema.Types.ObjectId,
            ref : 'User'
        }
    ]



} , {timestamps : true})
videoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video " , videoSchema)