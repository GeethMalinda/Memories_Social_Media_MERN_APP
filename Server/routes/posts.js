import express from 'express';
import {getPosts,createPosts,updatePost} from '../Controllers/posts.js';

const router = express.Router();

// router.get('/',((req, res) => {
//     res.send('THIS WORKS')
// }))

router.get('/',getPosts);
router.post('/',createPosts);
/*use for updating existing documents*/
router.patch('/:id',updatePost)

export default router;
