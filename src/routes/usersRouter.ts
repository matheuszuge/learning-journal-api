import { Router } from 'express';

export const usersRouter = Router();

usersRouter.get('/user', (req, res) => {
  res.json({ message: 'success' });
});

usersRouter.post('/user', (req, res) => {
  res.json({ message: 'success' });
});

usersRouter.put('/user/:id', (req, res) => {
  res.json({ message: 'success' });
});

usersRouter.delete('/user/:id', (req, res) => {
  res.json({ message: 'success' });
});
