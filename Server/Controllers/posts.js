import postMessage from '../Models/postMessage.js'
import PostMessage from '../Models/postMessage.js';
export const getPosts = async (req,res) => {
    try{
        const postMessages = await postMessage.find();
        res.status(200).json(postMessages);
    }catch (e) {
        res.status(503).json({message:e.message})
    }
}

export const createPosts = async (req,res) => {
    const posts = req.body;
    let newPost = new PostMessage(posts);
    try {
        await newPost.save();
    }catch (e) {
        
    }
}
