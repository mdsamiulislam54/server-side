import mongoose, { Types } from "mongoose";

const blogSchemaModel = new mongoose.Schema({
    title:{
        type: String,
        required: true, 

    },
    slug :{
        type: String,
        required: true,
    },
    author :{
        type: String,
        required: true,
    },
    category :{
        type: String,
        required: true,
    },
    content :{
        type: String,
        required: true,
    },
    image :{
        type: String,
        required: true,
    },
    tags :{
        type: [String],
        required: true,
    },
    publishedAt :{
        type: String,
        required: true,
    },
    likesCount :{
        type: String,
        required: true,
    },
    likedBy:{
        type: [String],
        required: true,
    },
    comments :{
        type: [String],
        required: true,
    },
})

const blogModel = mongoose.model('blog', blogSchemaModel )
export default blogModel;