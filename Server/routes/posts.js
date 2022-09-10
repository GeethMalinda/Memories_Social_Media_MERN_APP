import express from 'express';
import {getPosts,createPosts} from '../Controllers/posts.js';

const router = express.Router();

// router.get('/',((req, res) => {
//     res.send('THIS WORKS')
// }))

router.get('/',getPosts);
router.get('/',createPosts);

export default router;
