import React, { useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import api from '../../services/api';
import Dropzone from '../../components/Dropzone';

import { Header, Form } from './styles';

import logo from '../../assets/logo.svg';

const UploadPhotos: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File>();

  const history = useHistory();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = new FormData();

    if (selectedFile) {
      data.append('image', selectedFile);
    }

    history.push('/galery');
  }

  return (
    <>
      <Header>
        <img src={logo} alt="Ecoleta" />

        <Link to="/galery">
          <FiArrowRight />
          Ir para Galeria
        </Link>
      </Header>

      <Form onSubmit={handleSubmit}>
        <h1>Selecione sua Foto do Casamento</h1>

        <Dropzone onFileUploaded={setSelectedFile} />

        <button type="submit">Envie sua foto do Casamento</button>

      </Form>
    </>
  );
};

export default UploadPhotos;
