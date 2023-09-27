import React, { useState } from 'react';

const CompanyMatch = ({ id }) => {
    const [match, setMatch] = useState(null);

    const handleBusquedaClick = () => {
        fetch(`http://localhost:3001/api/companies/${id}/match`)        
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
            <button onClick={handleBusquedaClick}>Búsqueda</button>
            {match && (
                <div>
                    <h2>!! Devs que te buscan !!</h2>
                    {match.devs.map((dev, index) => (
                        <div key={index}>
                            <p>Nombre: {dev.nombres} {dev.apellidos}</p>
                            <p>Telefono: {dev.telefono} </p>
                            <p>Email: {dev.email}</p>
                            <p>Rol:{dev.rol}</p>
                            <p>Experiencia:{dev.experiencia}</p>
                            <h4>Habilidades:</h4>
                            <ul>
                                {dev.habilidades.map((habilidad, index) => (
                                    <li key={index}>{habilidad.nombre}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CompanyMatch;