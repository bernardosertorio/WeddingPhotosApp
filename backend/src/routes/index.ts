import { Router } from 'express';

import weddingPhotosRouter from './weddingPhotos.routes';

const routes = Router();

routes.use('/', weddingPhotosRouter);
routes.use('/gallery', weddingPhotosRouter);

export default routes;
