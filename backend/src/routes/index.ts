import { Router } from 'express';

import weddingPhotosRouter from './weddingPhotos.routes';

const routes = Router();

routes.use('/', weddingPhotosRouter);

export default routes;
