import { Router } from 'express';
import { prisma } from '../libs/prisma';
import { postsRouter } from './postsRouter';
import { authRouter } from './authRouter';
import { usersRouter } from './usersRouter';

export const mainRouter = Router();
mainRouter.use('/posts', postsRouter);
mainRouter.use('/auth', authRouter);
mainRouter.use('/users', usersRouter);


mainRouter.get('/ping', (req, res) => {
	res.json({ pong: true });
});

mainRouter.get('/teste', async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
});
