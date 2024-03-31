import { Router } from 'express';

import {
    registerUser,
    loginUser,
    getUserById,
    deleteUser,
    updateUser
} from '../controllers/userController.js';

const userRouter = Router();

userRouter.post('/users/register', registerUser);
userRouter.post('/users/auth/login', loginUser);
userRouter.get('/users/:UserID', getUserById);
userRouter.delete('/users/delete/:UserID', deleteUser);
userRouter.put('/users/update/:UserID', updateUser);

export default userRouter;
