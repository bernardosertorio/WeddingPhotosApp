import { Router } from 'express';
import multer from 'multer';
import multerConfig from '../config/multer';

import WeddingPhotosService from '../services/WeddingPhotosService';

const weddingPhotosRouter = Router();
const upload = multer(multerConfig);

weddingPhotosRouter.post(
  '/',
  upload.single('file'),
  async (request, response) => {
    try {
      const updateWeddingPhotos = new WeddingPhotosService();

      const newWeddingPhot = await updateWeddingPhotos.execute({
        filename: request.file.filename,
      });

      return response.json(newWeddingPhot);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  },
);

export default weddingPhotosRouter;
