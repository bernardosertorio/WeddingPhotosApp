import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import WeddingPhotos from '../models/WeddingPhotos';

class DeleteWeddingPhotoService {
  public async execute(id: string): Promise<void> {
    const weddingPhotosRepository = getRepository(WeddingPhotos);

    const photo = await weddingPhotosRepository.findOne(id);

    if (!photo) {
      throw new AppError('Photo does not exist');
    }

    await weddingPhotosRepository.remove(photo);
  }
}

export default DeleteWeddingPhotoService;
