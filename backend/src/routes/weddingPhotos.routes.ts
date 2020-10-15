import { Router } from 'express';
import { getRepository } from 'typeorm';
import multer from 'multer';
import multerConfig from '../config/multer';
import WeddingPhotos from '../models/WeddingPhotos';

import SavingWeddingPhotosService from '../services/SavingWeddingPhotosService';
import DeleteWeddingPhotoService from '../services/DeleteWeddingPhotoService';
import ShowWeddingPhotosService from '../services/ShowWeddingPhotosService';

const weddingPhotosRouter = Router();
const upload = multer(multerConfig);

weddingPhotosRouter.post(
  '/',
  upload.single('file'),
  async (request, response) => {
    const updateWeddingPhotos = new SavingWeddingPhotosService();
    const newWeddingPhotos = await updateWeddingPhotos.execute({
      filename: request.file.filename,
    });

    return response.json(newWeddingPhotos);
  },
);

weddingPhotosRouter.get('/gallery', async (request, response) => {
  const weddingPhotosRepository = getRepository(WeddingPhotos);
  const showWeddingPhotos = await weddingPhotosRepository.find();

  return response.json(showWeddingPhotos);
});

weddingPhotosRouter.get('/gallery/:id', async (request, response) => {
  const { id } = request.params;
  const showPhoto = new ShowWeddingPhotosService();

  await showPhoto.execute(id);

  return response.json(showPhoto);
});

weddingPhotosRouter.delete('/gallery/:id', async (request, response) => {
  const { id } = request.params;
  const deletePhoto = new DeleteWeddingPhotoService();

  await deletePhoto.execute(id);

  return response.status(204).send();
});

export default weddingPhotosRouter;
