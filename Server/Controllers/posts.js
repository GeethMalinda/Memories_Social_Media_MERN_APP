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
    console.log(req);
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
