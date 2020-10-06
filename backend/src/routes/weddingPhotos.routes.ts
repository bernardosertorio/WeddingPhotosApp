import { Router } from 'express';
import { getRepository } from 'typeorm';
import multer from 'multer';
import multerConfig from '../config/multer';
import WeddingPhotos from '../models/WeddingPhotos';

import SavingWeddingPhotosService from '../services/SavingWeddingPhotosService';

const weddingPhotosRouter = Router();
const upload = multer(multerConfig);

weddingPhotosRouter.post(
  '/',
  upload.single('file'),
  async (request, response) => {
    const updateWeddingPhotos = new SavingWeddingPhotosService();

    const newWeddingPhotos = await updateWeddingPhotos.execute({
      filename: request.file.fieldname,
    });

    return response.json(newWeddingPhotos);
  },
);

weddingPhotosRouter.get('/weddingphotos', async (request, response) => {
  const weddingPhotosRepository = getRepository(WeddingPhotos);
  const showWeddingPhotos = await weddingPhotosRepository.find();

  return response.json(showWeddingPhotos);
});

export default weddingPhotosRouter;
