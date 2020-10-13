import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Gallery from '../pages/Gallery';
import UploadPhotos from '../pages/UploadPhotos';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={UploadPhotos} />
    <Route path="/gallery" component={Gallery} />
  </Switch>
);

export default Routes;
