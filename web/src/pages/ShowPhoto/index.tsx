import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import { Header, PhotoContainer } from './styles';

import api from '../../services/api';

interface IPhoto {
  id: string;
  weddingPhoto: string;
}

const ShowPhoto: React.FC = () => {
  const [photo, setPhoto] = useState<IPhoto>();

  useEffect(() => {
    api.get(`/gallery/${photo?.id}`).then((response) => {
      setPhoto(response.data);
    });
  }, [photo]);

  return (
    <>
      <Header>
        <h1>Foto</h1>
        <Link to="/gallery">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <PhotoContainer>
        <img src={`http://localhost:3333/files/${photo?.weddingPhoto}`} alt="Wedding Photos" />
      </PhotoContainer>
    </>
  );
};

export default ShowPhoto;
