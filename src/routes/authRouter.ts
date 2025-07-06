import { Router } from 'express';

export const authRouter = Router();

authRouter.get('/login', (req, res) => {
  res.json({ message: 'success' });
});

authRouter.get('/register', (req, res) => {
  res.json({ message: 'success' });
});