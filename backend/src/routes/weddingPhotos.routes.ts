import { Router, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import multer from 'multer';
import WeddingPhotos from '../models/WeddingPhotos';
import multerConfig from '../config/multer';

import WeddingPhotosService from '../services/WeddingPhotosService';

const weddingPhotosRouter = Router();
const upload = multer(multerConfig);

weddingPhotosRouter.post(
  '/',
  upload.single('file'),
  async (request, response) => {
    const updateWeddingPhotos = new WeddingPhotosService();

    const newWeddingPhoto = await updateWeddingPhotos.execute({
      filename: request.file.filename,
    });

    return response.json(newWeddingPhoto);
  },
);

weddingPhotosRouter.get(
  '/weddingphotos',
  async (request: Request, response: Response) => {
    const weddingPhotosRepository = getRepository(WeddingPhotos);
    const showWeddingPhotos = await weddingPhotosRepository.find();

    return response.json(showWeddingPhotos);
  },
);

export default weddingPhotosRouter;
