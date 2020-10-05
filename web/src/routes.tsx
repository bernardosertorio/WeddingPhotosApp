import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import uploadPhotos from './pages/UploadPhotos';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={uploadPhotos} path="/" />
    </BrowserRouter>
  );
}

export default Routes;