/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const DevMatch = ({ id }) => {
  const [match, setMatch] = useState(null);

  const handleBusquedaClick = () => {
    fetch(`http://localhost:3001/api/devs/${id}/match`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        return response.json();
      })
      .then((data) => {
        setMatch(data);
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div>
      <button onClick={handleBusquedaClick}>Match</button>
      {match && (
        <div>
          <h2>!! Empresas que te buscan !!</h2>
          {match.companies.map((company, index) => (
            <div key={index}>
              <h3>Empresa {index + 1}</h3>
              <p>Nombre: {company.nombres}</p>
              <p>Email: {company.email}</p>
              <h4>Ofertas de Empleo:</h4>
              <ul>
                {company.ofertas_empleo.map((oferta, ofertaIndex) => (
                  <li key={ofertaIndex}>
                    <p>Rol: {oferta.rol}</p>
                    <p>Experiencia: {oferta.experiencia}</p>
                    <p>País: {oferta.pais}</p>
                    <p>Ciudad: {oferta.ciudad}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DevMatch;
