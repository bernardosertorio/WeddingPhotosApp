import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';

const weddingPhotosRouter = Router();
const upload = multer(uploadConfig);

weddingPhotosRouter.post(
  '/',
  upload.single('file'),
  async (request, response) => {
    return response.json({ ok: true });
  },
);

export default weddingPhotosRouter;
