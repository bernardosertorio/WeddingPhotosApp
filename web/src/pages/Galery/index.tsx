import React, { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api'

import './styles.css'

export default function Galery() {
  const [photos, setPhotos] = useState([]);
  
  async function loadPhotos() {
      useEffect(() => {
        api.get('/galery').then(response => {
          setPhotos(response.data);
        })
      }, []);

    return (

      <div className="listrecords-container">

        <header>
          <h1>Delivery list</h1>
          <Link className="button" to="/"> Register New </Link>
        </header>
        
        {response.map(deliveryuser => (

          <ul key={id}>
            <li>
             <span>{{}}</span>
             <h2>Foto do Casamento</h2>    
            </li>
          </ul>

        ))};
      </div>  
    )
  }
}