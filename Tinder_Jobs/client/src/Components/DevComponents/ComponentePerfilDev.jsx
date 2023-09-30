
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import DevMatch from './ComponenteMatchDev';
import '../../Styles/PerfilDev.css'

const ComponentePerfilDev = () => {
  const { id } = useParams();
  const [dev, setDev] = useState(null);
  const [showDevMatchPanel, setShowDevMatchPanel] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3001/api/devs/${id}`)
      .then((response) => response.json())
      .then((data) => setDev(data))
      .catch((error) => console.error('Error:', error));
  }, [id]);

  if (!dev) {
    return <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
  }

// Función para obtener el color de fondo según la habilidad
function obtenerColorFondo(habilidad) {
  switch (habilidad) {
    case 'html':
      return '#EFB495'; // Color de fondo para habilidad HTML
    case 'css':
      return '#95BDFF'; // Color de fondo para habilidad CSS
    case 'javascript':
      return '#f0db4f'; // Color de fondo para habilidad JavaScript
    case 'node.js':
      return '#B6E2A1'; // Color de fondo para habilidad Node.JS
    case 'react':
        return '#8EACCD'; // Color de fondo para habilidad REACT
    case 'sql':
      return '#ACB1D6'; // Color de fondo para SQL
    case 'nosql':
      return '#BA94D1'; // Color de fondo para SQL
    // Agrega más casos para otras habilidades según sea necesario
    default:
      return '#ccc'; // Color de fondo predeterminado
  }
}


  return (
    <>
    <div id="ContainerPerfilDev">
      <div className="container">
          <div id='containerCardDev' className="col-md-12 d-flex justify-content-center">
            <div id='cardDev' className="card col-md-6">
              <img src={dev.imagen || "https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?s=612x612&w=0&k=20&c=uP9rKidKETywVil0dbvg_vAKyv2wjXMwWJDNPHzc_Ug="} alt={`Imagen de ${dev.nombres}`} className="card-img-top" />
              <div className="card-body">
                <h4 className="text-center">
                  {dev.nombres.toUpperCase()} {dev.apellidos.toUpperCase()}
                </h4>
                <p id='subTitle' className='text-center capitalizar-primera-letra'>Desarrollador {dev.rol}</p>
                <p>Datos de contacto</p>
                <div className="card-text">
                  <p><strong>Email:</strong> {dev.email}</p>
                  <p><strong>Teléfono:</strong> {dev.telefono}</p>
                  <p className="capitalizar-primera-letra">
                    <strong>Ubicación:</strong> {dev.ciudad}, {dev.pais}
                  </p>
                  <p><strong>Experiencia en el cargo:</strong> {dev.experiencia}</p>
                </div>
              </div>
              <div id='HabilidadesDev' className='card-footer'>
                <p>Stack Técnologico:</p>
                {dev.habilidades.map((habilidad, index) => (
                  <span key={index} 
                    className="badge badge-primary mr-2"
                    style={{ backgroundColor: obtenerColorFondo(habilidad.nombre) }}
                  >
                    {habilidad.nombre.toUpperCase()}
                  </span>
                ))}
              </div>
              <div className="card-body mt-1 d-flex justify-content-between">
              <Link to="/devs">
                <button className='btn btn-secondary'>Salir</button>
              </Link>
              <button className='btn btn-danger' 
                onClick={() => setShowDevMatchPanel(!showDevMatchPanel)}>
                MATCH
                </button>
              </div>
            </div>
            <div id='devMatchPanel' className={`card col-md-6 ${showDevMatchPanel ? '' : 'hidden'}`}>
              <h4 className="text-center mt-2 mb-2">Explora Oportunidades Laborales</h4>
              <DevMatch id={id} />
            </div>
          </div>
      </div>
    </div>
    </>
  );
};

export default ComponentePerfilDev;
