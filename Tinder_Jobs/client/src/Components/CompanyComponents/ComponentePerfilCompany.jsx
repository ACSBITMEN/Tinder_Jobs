import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ComponentePerfilCompany = () => {

    const { id } = useParams();
    const [company, setCompany] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3001/api/companies/${id}`)
          .then((response) => response.json())
          .then((data) => setCompany(data))
          .catch((error) => console.error('Error:', error));
      }, [id]);

      if (!company) {
        return <div>Cargando...</div>;
      }


    return (
        <div>
            <h1>Perfil de Empresa</h1>
            <p>Nombre: {company.nombres}</p>
            <p>Email: {company.email}</p>
            <p>Telefono: {company.telefono}</p>
            <h2>ofertas de empleo:</h2>
            <p>Rol: {company.ofertas_empleo[0].rol}</p>
            <h2>Habilidades:</h2>
                <ul>
                    {company.ofertas_empleo[0].habilidades.map((habilidad, index) => (
                    <li key={index}>{habilidad.nombre}</li>
                    ))}
                </ul>
            <p>Experiencia: {company.ofertas_empleo[0].experiencia} </p>
        </div>
    )
}

export default ComponentePerfilCompany