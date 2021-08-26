import mongoose from "mongoose"

const postSchema = mongoose.Schema({
    title:String,
    image:String,
    durum:String,
    createdAt:{
        type:Date,
        default: new Date()
    },
});

const Post = mongoose.model('Post',postSchema);

export default Post;