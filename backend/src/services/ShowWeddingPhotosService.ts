import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import WeddingPhotos from '../models/WeddingPhotos';

class ShowWeddingPhotosService {
  public async execute(id: string): Promise<WeddingPhotos> {
    const weddingPhotosRepository = getRepository(WeddingPhotos);
    const showPhoto = await weddingPhotosRepository.findOne(id);

    if (!showPhoto) {
      throw new AppError('Photo does not exist');
    }

    return showPhoto;
  }
}

export default ShowWeddingPhotosService;
