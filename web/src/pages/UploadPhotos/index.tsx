import React, { useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import Container from '@material-ui/core/Container';
import api from '../../services/api';
import Dropzone from '../../components/Dropzone';

import { Header, Form } from './styles';

const UploadPhotos: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File>();

  const history = useHistory();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = new FormData();

    if (selectedFile) {
      data.append('file', selectedFile);
    }

    if (window.confirm('Você quer adicionar essa foto?')) {
      api.post('/', data).then(() => {
        history.push('/gallery');
      });
    }
  }

  return (
    <Container maxWidth="lg">
      <Header>
        <h1>Upload de Imagem</h1>

        <Link to="/gallery">
          <FiArrowRight />
          Ir para Galeria
        </Link>
      </Header>

      <Form onSubmit={handleSubmit}>
        <h2>Selecione sua Foto do Casamento</h2>

        <Dropzone onFileUploaded={setSelectedFile} />

        <button disabled={!selectedFile} style={{ opacity: !selectedFile ? 0.4 : 1 }} type="submit">Envie sua foto do Casamento</button>

      </Form>
    </Container>
  );
};

export default UploadPhotos;
