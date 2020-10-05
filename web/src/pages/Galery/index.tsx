import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

const Galery: React.FC = () => {
  const [photos, setPhotos] = useState<Repository[]>(() => {
    const storagedPhotos = localStorage.getItem(
      '@FotosDeCasamento:photos',
    );

    if (storagedPhotos) {
      return JSON.parse(storagedPhotos);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@FotosDeCasamento:photos',
      JSON.stringify(photos),
    );
  }, [photos]);

  return (

    <div className="listrecords-container">

      <header>
        <h1>Wedding Photos List</h1>
        <Link className="button" to="/">Post New Wedding Photo</Link>
      </header>

      {response.map((wedding) => (

        <ul key={id}>
          <li>
            <span>{{}}</span>
            <h2>Foto do Casamento</h2>
          </li>
        </ul>

      ))}
      ;
    </div>
  );
};

export default Galery;
