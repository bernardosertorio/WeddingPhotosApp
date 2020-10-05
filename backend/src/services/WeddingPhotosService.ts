import { getRepository } from 'typeorm';
import path from 'path';
import { uuid } from 'uuidv4';
import WeddingPhotos from '../models/WeddingPhotos';
import AppError from '../errors/AppError';
import multerConfig from '../config/multer';

interface Request {
  filename: string;
}

class WeddingPhotosService {
  public async execute({ filename }: Request): Promise<WeddingPhotos> {
    const weddingPhotosRepository = getRepository(WeddingPhotos);

    const checkPhotoExists = await weddingPhotosRepository.findOne({
      where: { filename },
    });

    if (checkPhotoExists) {
      throw new AppError('This photo already exists', 401);
    }

    const newWeddingPhotos = weddingPhotosRepository.create({
      id: uuid(),
      weddingPhotos: filename,
    });

    await weddingPhotosRepository.save(newWeddingPhotos);

    return newWeddingPhotos;
  }
}

export default WeddingPhotosService;
