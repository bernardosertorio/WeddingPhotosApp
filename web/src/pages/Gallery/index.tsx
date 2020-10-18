import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';

import api from '../../services/api';

interface IPhotos {
  id: string;
  weddingPhotos: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    padding: 50,
  },
  box: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 50,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const stylesColors = { primary: '#2FB86E' };

const Gallery: React.FC = () => {
  const classes = useStyles();
  const [photos, setPhotos] = useState<IPhotos[]>([]);

  useEffect(() => {
    api.get('/gallery').then((response) => {
      setPhotos(response.data);
    });
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        <Box className={classes.box}>
          <h1 style={{ color: stylesColors.primary }}>Galeria de Imagens</h1>
          <Link style={{ textDecoration: 'none' }} to="/">
            <FiArrowLeft />
            <strong style={{ marginLeft: 5 }}>Voltar</strong>
          </Link>
        </Box>
        <div className={classes.root}>
          <GridList>
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }} />
            {photos.map((photo, index) => (
              <GridListTile key={photo.id}>
                <Link to={`/gallery/${photo.weddingPhotos}`}>
                  <img src={`http://localhost:3333/files/${photo.weddingPhotos}`} alt="Wedding Photos" />
                </Link>
                <button type="submit">Deletar</button>
                <GridListTileBar
                  title={index}
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </Container>
    </>
  );
};

export default Gallery;
