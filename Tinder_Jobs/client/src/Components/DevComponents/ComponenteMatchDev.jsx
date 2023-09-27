<<<<<<< HEAD
import React, { useState } from 'react';
=======
import { useState, useEffect } from 'react';
import '../../Styles/DevMatch.css';
>>>>>>> main

const DevMatch = ({ id }) => {
  const [match, setMatch] = useState(null);

<<<<<<< HEAD
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
=======
  useEffect(() => {
    // Función para realizar la solicitud HTTP y actualizar el estado match
    const fetchMatch = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/devs/${id}/match`);

        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }

        const data = await response.json();
        setMatch(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // Llamar a la función de solicitud cuando el componente se monte
    fetchMatch();
  }, [id]);

  return (
    <div id='dev-match-container' className="dev-match-container">
      {match && (
        <div className="row">
            {match.companies.map((company, index) => (
              <div key={index} className="card mb-3">
                <h4 className="card-header">Oferta {company.nombres.toUpperCase()}</h4>
                <div className="card-body">
                  <h6 className="card-subtitle mb-1 text-muted">Descripcion de la oferta:</h6>
                  {company.ofertas_empleo.map((oferta, ofertaIndex) => (
                    <div key={ofertaIndex}>
                      <p> En busqueda de Desarrollador <strong>{oferta.rol} </strong>
                      ubicado en la ciudad de {oferta.ciudad}, {oferta.pais}.
                      </p>
                      <p><span> Requisitos:</span></p>
                      <p><span>- Experiencia: </span>{oferta.experiencia}</p>
                      <p className='mb-1'><span>- Habilidades: </span></p>
                        {oferta.habilidades.map((habilidad, habilidadIndex) => (
                          <span key={habilidadIndex}>{habilidad.nombre.toUpperCase()}</span>
                        ))}
                    </div>
                  ))}
                </div>
                  <p className="card-footer">Si estas interesado contactanos al 
                  <strong> telefono: {company.telefono} </strong> o por medio del 
                  <strong> email: {company.email}</strong></p>
              </div>
            ))}
>>>>>>> main
        </div>
      )}
    </div>
  );
};

export default DevMatch;
