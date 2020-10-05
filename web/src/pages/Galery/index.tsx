import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

const Galery: React.FC = () => {
  const [photos, setPhotos] = useState([]);
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

    return (

      <div className="listrecords-container">

        <header>
          <h1>Wedding Photos List</h1>
          <Link className="button" to="/">Post New Wedding Photo</Link>
        </header>

        {response.map((deliveryuser) => (

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
};

export default Galery;
