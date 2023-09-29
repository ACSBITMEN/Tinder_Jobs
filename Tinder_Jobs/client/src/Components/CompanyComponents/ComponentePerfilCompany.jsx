
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import CompanyMatch from './ComponenteMatchCompany';
import '../../Styles/PerfilCompany.css'

const ComponentePerfilCompany = () => {

    const { id } = useParams();
    const [company, setCompany] = useState(null);
    const [showDevMatchPanel, setShowDevMatchPanel] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:3001/api/companies/${id}`)
            .then((response) => response.json())
            .then((data) => setCompany(data))
            .catch((error) => console.error('Error:', error));
    }, [id]);

    if (!company) {
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
        <div id="ContainerPerfilCompany">
            <div className="container">
                <div id='containerCardCompany' className="col-md-12 d-flex justify-content-center">
                    <div id='cardCompany' className="card col-md-6">
                        <img src={company.imagen || "https://images.squarespace-cdn.com/content/v1/568981602399a3a3e507fff4/1548253334574-W4OFLUFUXJKJBXNW2UDK/Asset+2%40300x.png"} alt={`Imagen de ${company.nombres}`} className="card-img-top" />
                        <div className="card-body">
                            <h4 className="text-center">
                            {company.nombres.toUpperCase()}
                            </h4>
                            <p id='subTitleCompany' className='text-center capitalizar-primera-letra'>Desarrollador {company.ofertas_empleo[0].rol}</p>
                            <p>Datos de contacto</p>
                            <div className="card-text">
                                <p><strong>Email:</strong> {company.email}</p>
                                <p><strong>Teléfono:</strong> {company.telefono}</p>
                                <p className="capitalizar-primera-letra">
                                    <strong>Ubicación:</strong> {company.ofertas_empleo[0].ciudad}, {company.ofertas_empleo[0].pais}
                                </p>
                                <p><strong>Experiencia en el cargo:</strong> {company.ofertas_empleo[0].experiencia}</p>
                            </div>
                        </div>
                        <div id='HabilidadesCompany' className='card-footer'>
                        <p>Stack Técnologico:</p>
                        {company.ofertas_empleo[0].habilidades.map((habilidad, index) => (
                            <span key={index}
                            className="badge badge-primary mr-2"
                            style={{ backgroundColor: obtenerColorFondo(habilidad.nombre) }}
                            >
                                {habilidad.nombre.toUpperCase()}
                            </span>
                            ))}
                        </div>
                        <div className="card-body mt-1 d-flex justify-content-between">
                        <Link to="/companies">
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
                        <CompanyMatch id={id} />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ComponentePerfilCompany