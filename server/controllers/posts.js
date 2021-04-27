//All method from app.use() will be written here cuz complex and long code
import {PostModel} from "../models/PostModel.js";

export const getPosts = async (req, res) =>{
    // res.send('ROUTER SUCCESS');
    try{
        //test object
        // const post = new PostModel({
        //     title: 'test',
        //     content: 'test',
        // });
        // post.save();
    const posts = await PostModel.find();
    console.log('posts', posts);
    res.status(200).json(posts);
    }catch(err){
        res.status(500).json({error: err});
    }
};

export const createPost = async (req, res) =>{
    // res.send('Create SUCCESS');
    try{
        //lay data tu client send len
        const newPost = req.body;
        //save into database
        const post = new PostModel(newPost);
        await post.save();
        //gui res ve client
        res.status(200).json(post);
    }catch(err){
        res.status(500).json({error: err});
    }
};

export const updatePost = async (res, req) =>{
    try{
        const updatePost = req.body;
        const post = await PostModel.findOneAndUpdate({_id: updatePost._id}, updatePost, {new: true});
        await post.save();
        res.status(200).json(post);

    }catch(err){
        res.status(500).json({error: err});
    }
};
