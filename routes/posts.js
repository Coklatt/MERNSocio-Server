import express from 'express';
import { getFeeds, getUserPosts, likePost } from '../controllers/posts.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

/* READ */
router.get('/', verifyToken, getFeeds);
router.get('/:id', verifyToken, getUserPosts);

/* UPDATE */
router.patch('/:id/like', verifyToken, likePost);

export default router;
