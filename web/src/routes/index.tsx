import React from 'react';
import { Route, Switch } from 'react-router-dom';

import UploadPhotos from '../pages/UploadPhotos';
import Galery from '../pages/Galery';

const Routes: React.FC = () => (
    <Switch>
      <Route path="/" exact component={UploadPhotos} />
      <Route path="/galery" component={Galery} />
    </Switch>
  );


export default Routes;
