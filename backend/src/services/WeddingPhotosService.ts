import { getRepository } from 'typeorm';
import WeddingPhotos from '../models/WeddingPhotos';

interface Request {
  filename: string;
}

interface WeddingPhotos {}

class SavingWeddingPhotos {
  public async execute({ filename }: Request): Promise<WeddingPhotos> {
    const weddingPhotosRepository = getRepository(WeddingPhotos);

    const checkPhotoExists = await weddingPhotosRepository.findOne({
      where: { filename },
    });

    if (checkPhotoExists) {
      throw new AppError('This photo already exists', 401);
    }

    await weddingPhotosRepository.save(filename);
  }
}

export default SavingWeddingPhotos;
