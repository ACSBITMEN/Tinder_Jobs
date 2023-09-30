
import { useState } from 'react';
import { Link } from 'react-router-dom';
import BtnSocialMedia from '../BtnSocialMedia';
import '../../styles/RegisterCompany.css';
import 'font-awesome/css/font-awesome.min.css';

const RegisterCompany = () => {
  const [formData, setFormData] = useState({
    nombres: '',
    telefono: '',
    email: '',
    ofertas_empleo: [
      {
        rol: '',
        habilidades: [
          {
            nombre: 'html',
            seleccionada: false,
          },
          {
            nombre: 'javascript',
            seleccionada: false,
          },
          {
            nombre: 'react',
            seleccionada: false,
          },
          {
            nombre: 'node.js',
            seleccionada: false,
          },
          {
            nombre: 'sql',
            seleccionada: false,
          },
          {
            nombre: 'nosql',
            seleccionada: false,
          },
          {
            nombre: 'css',
            seleccionada: false,
          },
        ],
        experiencia: 'practicas',
        pais: '',
        ciudad: '',
      },
    ],
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOfertaInputChange = (event, index) => {
    const { name, value } = event.target;
    const updatedOfertasEmpleo = [...formData.ofertas_empleo];
    updatedOfertasEmpleo[index] = {
      ...updatedOfertasEmpleo[index],
      [name]: value,
    };
    setFormData({
      ...formData,
      ofertas_empleo: updatedOfertasEmpleo,
    });
  };

  const handleCheckboxChange = (event, index, habilidadIndex) => {
    const { checked } = event.target;
    const updatedOfertasEmpleo = [...formData.ofertas_empleo];
    updatedOfertasEmpleo[index].habilidades[habilidadIndex].seleccionada = checked;
    setFormData({
      ...formData,
      ofertas_empleo: updatedOfertasEmpleo,
    });
  };

  const handleAddOferta = () => {
    const newOferta = {
      rol: '',
      habilidades: [
        {
          nombre: 'html',
          seleccionada: false,
        },
        {
          nombre: 'javascript',
          seleccionada: false,
        },
        {
          nombre: 'react',
          seleccionada: false,
        },
        {
          nombre: 'node.js',
          seleccionada: false,
        },
        {
          nombre: 'sql',
          seleccionada: false,
        },
        {
          nombre: 'nosql',
          seleccionada: false,
        },
        {
          nombre: 'css',
          seleccionada: false,
        },
      ],
      experiencia: 'practicas',
      pais: '',
      ciudad: '',
    };
    setFormData({
      ...formData,
      ofertas_empleo: [...formData.ofertas_empleo, newOferta],
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Filtrar las habilidades seleccionadas para cada oferta de empleo
    const filteredOfertasEmpleo = formData.ofertas_empleo.map((oferta) => {
      const selectedHabilidades = oferta.habilidades.filter((habilidad) => habilidad.seleccionada);
      return {
        ...oferta,
        habilidades: selectedHabilidades,
      };
    });
  
    const dataToSend = {
      ...formData,
      ofertas_empleo: filteredOfertasEmpleo,
    };
  
    try {
      const response = await fetch('http://localhost:3001/api/companies/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });
  
      if (response.status === 201) {
        console.log('Registro exitoso');
        window.location.href = 'http://localhost:5173/';
      } else {
        console.error('Error en el registro');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };
  

  return (
    <>
      <div>
        <Link to="/companies" className="btn m-2"> ← Volver al login</Link>
      </div>
      <div id='formRegisterCompany' className="container mt-0 mb-1">
        <div className="row justify-content-center">
          <div className="col-md-7">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center mt-3 mb-3">
                  <i className="fa fa-pencil"></i>
                  Registro de Company
                </h3>
                <form onSubmit={handleSubmit}>
                  <h5>Información de la empresa</h5>
                  <div className="row mb-1">
                    <div className="col-md-6">
                      <div>
                        <label htmlFor="nombres" className="form-label">Razon social</label>
                        <input id="nombres" className="form-control"
                        type="text"
                        name="nombres"
                        value={formData.nombres}
                        onChange={handleInputChange}
                        required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div>
                        <label htmlFor="telefono" className="form-label">Telefono</label>
                          <input id="telefono" className="form-control"
                          type="text"
                          name="telefono"
                          value={formData.telefono}
                          onChange={handleInputChange}
                          required
                          />
                      </div>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-md-6">
                      <div className="mb-1">
                        <label htmlFor="telefono" className="form-label">Email</label>
                        <input id="email" className="form-control"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-1">
                        <label htmlFor="password" className="form-label">Contraseña:</label>
                        <input id="password" className="form-control"
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <h5>Oferta de empleo a publicar</h5>
                  {formData.ofertas_empleo.map((oferta, index) => (
              <div key={index} className="row mb-2">
                <div className="col-md-6">
                  <div className="mb-1">
                    <label htmlFor={`rol-${index}`} className="form-label">Rol:</label>
                    <select id={`rol-${index}`} className="form-control"
                      name="rol"
                      value={formData.ofertas_empleo[index].rol}
                      onChange={(e) => handleOfertaInputChange(e, index)}
                    >
                    <option value="front">Frontend</option>
                    <option value="back">Backend</option>
                    <option value="fullstack">Fullstack</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-1">
                  <label htmlFor={`experiencia-${index}`} className="form-label">Experiencia:</label>
                  <select id={`experiencia-${index}`} className="form-select"
                    name="experiencia"
                    value={formData.ofertas_empleo[index].experiencia}
                    onChange={(e) => handleOfertaInputChange(e, index)}
                  >
                    <option value="practicas">Prácticas</option>
                    <option value="sin experiencia">Sin experiencia</option>
                    <option value="1 año">1 año</option>
                    <option value="2 años">2 años</option>
                    <option value="3 años">3 años</option>
                    <option value="mas de 4">Más de 4</option>
                  </select>
                  </div>
                </div>
                <div className="row mb-2">
                    <div className="col-md-6">
                      <div className="mb-1">
                      <label htmlFor={`pais-${index}`}>País:</label>
                      <input id={`pais-${index}`} className="form-control"
                        type="text"
                        name="pais"
                        value={formData.ofertas_empleo[index].pais}
                        onChange={(e) => handleOfertaInputChange(e, index)}
                        required
                      />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-1">
                        <label htmlFor={`ciudad-${index}`}>Ciudad:</label>
                        <input id={`ciudad-${index}`} className="form-control"
                        type="text"
                        name="ciudad"
                        value={formData.ofertas_empleo[index].ciudad}
                        onChange={(e) => handleOfertaInputChange(e, index)}
                        required
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                  <label className="form-label">Stack tecnológico</label>
                  <div id='containerStackCompany' className="mb-3 d-flex flex-wrap">
                  {['html', 'javascript', 'react', 'node.js', 'sql', 'nosql', 'css'].map((habilidad, habilidadIndex) => (
                    <label key={habilidad}>
                      <input
                        type="checkbox"
                        name={habilidad}
                        checked={formData.ofertas_empleo[index].habilidades[habilidadIndex].seleccionada}
                        onChange={(e) => handleCheckboxChange(e, index, habilidadIndex)}
                      />
                      {habilidad}
                    </label>
                  ))}
                  </div>
                </div>
              </div>
            ))}
            <div id='btnRegisterCompany' className='d-flex justify-content-around'>
            <button type="button" className='btn btn-secondary' onClick={handleAddOferta}>Agregar Oferta</button>
            <button type="submit" className='btn btn-primary'>Registrar</button>
            </div>
                </form>
                <div>
                  <BtnSocialMedia/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default RegisterCompany;