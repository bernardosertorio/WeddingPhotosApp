import React, { useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import api from '../../services/api'
import Dropzone from '../../components/Dropzone';

import './styles.css'

import logo from '../../assets/logo.svg'

const UploadPhotos = () => {
  const [selectedFile, setSelectedFile] = useState<File>()

  const history = useHistory()

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const data = new FormData()
    
    if (selectedFile) {
      data.append('image', selectedFile)
    }

     history.push('/galery')
  }

   return (
      <div id="page-create-point">
       <header>
         <img src={logo} alt="Ecoleta" />

         <Link to="/galery">
           <FiArrowRight />
           Ir para Galeria
         </Link>
       </header>

        <form onSubmit={handleSubmit}>
          <h1>Selecione sua Foto do Casamento</h1>

          <Dropzone onFileUploaded={setSelectedFile} />

          <button type="submit">Envie sua foto do Casamento</button>
        
        </form>
     </div>
   )
 }

 export default UploadPhotos;