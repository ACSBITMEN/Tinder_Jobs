import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/PerfilDev.css'

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

const PerfilDev = () => {
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
    <div id="ContainerPerfilDev" >
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src={dev.imagen || "https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?s=612x612&w=0&k=20&c=uP9rKidKETywVil0dbvg_vAKyv2wjXMwWJDNPHzc_Ug="} alt={`Imagen de ${dev.nombres}`} className="card-img-top" />
              <div className="card-body">
                <h4 className='text-center'>
                  {dev.nombres.toUpperCase()} {dev.apellidos.toUpperCase()}
                </h4>
                <p id='subTitle' className='text-center capitalizar-primera-letra'>Desarrollador {dev.rol}</p>
                <label htmlFor="datosContacto">Datos de contacto</label>
                <p id='datosContacto' className="card-text">
                  Email: {dev.email}<br />
                  Teléfono: {dev.telefono}<br />
                  <p className='capitalizar-primera-letra'>
                  Ubicación: {dev.ciudad}, {dev.pais}<br />
                  </p>
                  Experiencia en el cargo: {dev.experiencia}
                </p>
              </div>
                <div id='HabilidadesDev' className='card-footer'>
                  <label htmlFor="HabilidadesDev">Habilidades:</label><br/>
                  {dev.habilidades.map((habilidad, index) => (
                    <span key={index} 
                    className="badge badge-primary mr-2"
                    style={{ backgroundColor: obtenerColorFondo(habilidad.nombre) }}
                    >
                      {habilidad.nombre.toUpperCase()}
                    </span>
                  ))}
                </div>
                <div className="card-body d-flex justify-content-between rowbtn pt-3">
                <button className="btn btn-secondary">Salir</button>
                <button href="#" className="btn btn-danger">MATCH</button>
              </div>
            </div>
          </div>
          {/* Puedes repetir este bloque de col-md-4 para más tarjetas */}
        </div>
      </div>
    </div>
  );
};

export default PerfilDev;