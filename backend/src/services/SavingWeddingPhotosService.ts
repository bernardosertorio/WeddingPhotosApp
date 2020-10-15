import { getRepository } from 'typeorm';
import WeddingPhotos from '../models/WeddingPhotos';

interface Request {
  filename: string;
}

class SavingWeddingPhotosService {
  public async execute({ filename }: Request): Promise<WeddingPhotos> {
    const weddingPhotosRepository = getRepository(WeddingPhotos);
    const newWeddingPhotos = weddingPhotosRepository.create({
      weddingPhotos: filename,
    });

    await weddingPhotosRepository.save(newWeddingPhotos);

    return newWeddingPhotos;
  }
}

export default SavingWeddingPhotosService;
