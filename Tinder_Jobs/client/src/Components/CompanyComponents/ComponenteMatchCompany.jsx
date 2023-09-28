import { useState, useEffect } from 'react';

const CompanyMatch = ({ id }) => {
    const [match, setMatch] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      // Función para realizar la solicitud a la API
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:3001/api/companies/${id}/match`);
  
          if (!response.ok) {
            throw new Error('Error en la solicitud');
          }
  
          const data = await response.json();
          setMatch(data);
          setLoading(false); // Marcar como cargado
        } catch (error) {
          console.error('Error:', error);
          setError(error); // Manejar el error
          setLoading(false); // Marcar como cargado (con error)
        }
      };
  
      // Llama a fetchData cuando el componente se monta
      fetchData();
    }, [id]);
  
    if (loading) {
      return <p>Cargando...</p>;
    }
  
    if (error) {
      return <p>Error: {error.message}</p>;
    }
  
    // Bloque de código para mostrar los datos cuando la solicitud está completa
    return (
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
    );
  };
  

export default CompanyMatch;
