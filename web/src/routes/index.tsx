import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Gallery from '../pages/Gallery';
import UploadPhotos from '../pages/UploadPhotos';
import ShowPhoto from '../pages/ShowPhoto';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={UploadPhotos} />
    <Route path="/gallery" component={Gallery} />
    <Route path="/gallery/id" component={ShowPhoto} />
  </Switch>
);

export default Routes;
