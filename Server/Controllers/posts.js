import postMessage from '../Models/postMessage.js'
import PostMessage from '../Models/postMessage.js';
export const getPosts = async (req,res) => {
    try{
        const postMessages = await postMessage.find();
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS")
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
