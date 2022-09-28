import express from 'express';
import {getPosts,createPosts,updatePost,deletePost} from '../Controllers/posts.js';

const router = express.Router();

// router.get('/',((req, res) => {
//     res.send('THIS WORKS')
// }))

router.get('/',getPosts);
router.post('/',createPosts);
/*use for updating existing documents*/
router.patch('/:id',updatePost)
router.delete('/:id',deletePost)


export default router;
