import express from 'express';
import {getPosts,createPosts} from '../Controllers/posts.js';

const router = express.Router();

// router.get('/',((req, res) => {
//     res.send('THIS WORKS')
// }))

router.get('/',getPosts);
router.post('/',createPosts);

export default router;
