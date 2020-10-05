import React, { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api'

import './styles.css'

export default function Galery() {
  const [records, setRecords] = useState([])
  
  async function loadRecords(page = 1) {

    const response = await api.get('/galery', {
     params: {
        File,
      }
    })

    useEffect(() => {
      loadRecords()
    }, [])

  return (

    <div className="listrecords-container">

      <header>
        <h1>Delivery list</h1>
        <Link className="button" to="/"> Register New </Link>
      </header>
      
      {records.map(deliveryuser => (

        <ul key={id}>
          <li>
          <h2>Delivery Record Number</h2>
          <p>#00{}</p>
          </li>
        </ul>

      ))}

    </div>  
  )
  }
}