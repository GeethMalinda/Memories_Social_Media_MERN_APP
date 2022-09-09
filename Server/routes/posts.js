import express from 'express';
import {getPosts} from '../Controllers/posts';

const router = express.Router();

// router.get('/',((req, res) => {
//     res.send('THIS WORKS')
// }))

router.get('/',getPosts);

export default router;
