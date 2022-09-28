import express from 'express';
import {getPosts,createPosts,updatePost,deletePost,likePost} from '../Controllers/posts.js';

const router = express.Router();

// router.get('/',((req, res) => {
//     res.send('THIS WORKS')
// }))

router.get('/',getPosts);
router.post('/',createPosts);
/*use for updating existing documents*/
router.patch('/:id',updatePost)
router.delete('/:id',deletePost)
router.patch('/:id/likePost',likePost)
export default router;
