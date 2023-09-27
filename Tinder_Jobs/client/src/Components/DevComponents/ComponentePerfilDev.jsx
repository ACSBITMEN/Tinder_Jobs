/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DevMatch from './ComponenteMatchDev';

const ComponentePerfilDev = () => {
  const { id } = useParams();
  const [dev, setDev] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/api/devs/${id}`)
      .then((response) => response.json())
      .then((data) => setDev(data))
      .catch((error) => console.error('Error:', error));
  }, [id]);

  if (!dev) {
    return <div>Cargando...</div>;
  }

  return (
    <>
    <div>
      <h1>Perfil de Desarrollador</h1>
      <p>Nombre: {dev.nombres} {dev.apellidos}</p>
      <p>Email: {dev.email}</p>
      <p>Telefono: {dev.telefono}</p>
      <h2>Rol:</h2>
      <p>{dev.rol}</p>
      <h2>Habilidades:</h2>
      <ul>
        {dev.habilidades.map((habilidad, index) => (
          <li key={index}>{habilidad.nombre}</li>
        ))}
      </ul>
    </div>
    <div>
      <DevMatch id={id} />
    </div>
    </>
  );
};

export default ComponentePerfilDev;
