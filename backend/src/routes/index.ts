import { Router } from 'express';

import weddingPhotosRouter from './weddingPhotos.routes';

const routes = Router();

routes.use('/', weddingPhotosRouter);
routes.use('/weddingphotos', weddingPhotosRouter);

export default routes;
