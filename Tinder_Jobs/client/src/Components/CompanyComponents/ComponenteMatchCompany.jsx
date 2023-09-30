import { useState, useEffect } from 'react';
import '../../Styles/CompanyMatch.css';

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
      <div id='Company-match-container' className="Company-match-container">
        <div className="row">
          {match.devs.map((dev, index) => (
            <div key={index} className="card mb-3">
              <h4 className="card-header">{dev.nombres.toUpperCase()} {dev.apellidos.toUpperCase()}<br />Desarrollador {dev.rol}</h4>
              <div className="card-body">
              <h6 className="card-subtitle mb-1 text-muted">Informacion:</h6>
                <p>Telefono: {dev.telefono} </p>
                <p>Email: {dev.email}</p>
                <p className="capitalizar-primera-letra">Rol: {dev.rol}</p>
                <p>Experiencia: {dev.experiencia}</p>
                <h6 className='mt-2'>Habilidades: </h6>
                <div className='d-flex flex-wrap'>
                  {dev.habilidades.map((habilidad, index) => (
                    <span key={index}>{habilidad.nombre.toUpperCase()}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

export default CompanyMatch;
