import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import api from '../../services/api';
import { Header } from './styles';

interface FilenameParams {
  filename: string;
}

const Galery: React.FC = () => {
  [photosRepository, setPhotosRepository] = useState<FilenameParams>(() => {
    const storagedPhotos = localStorage.getItem(
      '@FotosDeCasamento:photos',
    );

    if (storagedPhotos) {
      return JSON.parse(storagedPhotos);
    }

    return [];
  });

  useEffect(() => {
    api.get('/galery').then((response) => {
      setPhotosRepository(response.data);
    });
  }, []),

  response = await api.get<FilenameParams>(`galery/${photosRepository}`);

  return (
    <>
      <ContainerPhoto>
        <Header>
          <h1>Wedding Photos List</h1>
          <Link className="button" to="/">Post New Wedding Photo</Link>
        </Header>
        <Body>
          {response.map(() => (
            <ul key={id}>
              <li>
                <span>{}</span>
                <h2>Foto do Casamento</h2>
              </li>
            </ul>
          ))}
        </Body>
      </ContainerPhoto>
    </>
  );
};

export default Galery;
