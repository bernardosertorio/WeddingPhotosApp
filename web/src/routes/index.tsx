import React from 'react';
import { Switch, Route } from 'react-router-dom';

import UploadPhotos from '../pages/UploadPhotos';
import Galery from '../pages/Galery';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={UploadPhotos} />
    <Route path="/" component={Galery} />
  </Switch>
);

export default Routes;
