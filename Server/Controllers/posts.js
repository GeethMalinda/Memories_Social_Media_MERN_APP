import postMessage from '../Models/postMessage.js'
import PostMessage from '../Models/postMessage.js';
import mongoose from 'mongoose';

export const getPosts = async (req,res) => {
    try{
        const postMessages = await postMessage.find();
        res.status(200).json(postMessages);
    }catch (e) {
        res.status(503).json({message:e.message})
    }
}

export const createPosts = async (req,res) => {
    const { title, message, selectedFile, creator, tags } = req.body;

    const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })

    try {
        await newPostMessage.save();
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.status(201).json(newPostMessage );
    }catch (e) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req,res) => {
    const {id} = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No post with id: ${id}`);
    }

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };
    await PostMessage.findByIdAndUpdate(id,updatedPost,{new:true})
    res.json(updatedPost)
}

export const deletePost = async (req,res) => {

    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No post with id: ${id}`);
    }
    await postMessage.findByIdAndRemove(id);

    res.json({message:'Post Deleted SuccessFully'})

}


export const likePost = async (req,res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No post with id: ${id}`);
    }

    const post = await PostMessage.findById(id);
    const updatePost = await PostMessage.findByIdAndUpdate(id,{likeCount:post.likeCount + 1},{new:true})
    res.json(updatePost)
}
