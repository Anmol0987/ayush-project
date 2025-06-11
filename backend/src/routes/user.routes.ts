import { Router } from 'express';
import { signUp, getAllUsers, signIn } from '../controller/user.controller';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.get('/',authMiddleware, getAllUsers);
router.post('/signup', signUp);
router.post('/signin', signIn);


export default router;