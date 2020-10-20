import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import UploadPhotos from '../pages/UploadPhotos';
// import Gallery from '../pages/Gallery';
import ShowPhoto from '../pages/ShowPhoto';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/gallery/:id" component={ShowPhoto} />
  </Switch>
);

export default Routes;
