import { Router } from 'express';

export const postsRouter = Router();

postsRouter.get('/entries', (req, res) => {
  res.json({ message: 'success' });
});

postsRouter.post('/entries', (req, res) => {
  res.json({ message: 'success' });
});

postsRouter.get('/entries/:id', (req, res) => {
  res.json({ message: 'success' });
});

postsRouter.put('/entries/:id', (req, res) => {
  res.json({ message: 'success' });
});

postsRouter.delete('entries/:id', (req, res) => {
  res.json({ message: 'success' });
});
