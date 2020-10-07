import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Galery from '../pages/Galery';

import UploadPhotos from '../pages/UploadPhotos';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={UploadPhotos} />
    <Route path="/galery" component={Galery} />
  </Switch>
);

export default Routes;
