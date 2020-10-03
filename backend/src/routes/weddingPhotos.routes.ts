import { Router } from 'express';

const weddingPhotosRouter = Router();

weddingPhotosRouter.post('/', async (request, response) => {
  return response.json({ ok: true });
});

export default weddingPhotosRouter;
