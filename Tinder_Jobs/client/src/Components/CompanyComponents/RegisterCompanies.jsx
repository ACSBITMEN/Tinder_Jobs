import React, { useState } from 'react';

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
    <div>
      <h1>Registro de Company</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombres">Nombre de la compañía:</label>
        <input
          type="text"
          id="nombres"
          name="nombres"
          value={formData.nombres}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="telefono">Teléfono:</label>
        <input
          type="text"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <div>
          <p>Ofertas de empleo:</p>
          {formData.ofertas_empleo.map((oferta, index) => (
            <div key={index}>
              <label htmlFor={`rol-${index}`}>Rol:</label>
              <input
                type="text"
                id={`rol-${index}`}
                name="rol"
                value={formData.ofertas_empleo[index].rol}
                onChange={(e) => handleOfertaInputChange(e, index)}
                required
              />
              <div>
                <p>Habilidades:</p>
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
              <label htmlFor={`experiencia-${index}`}>Experiencia:</label>
              <select
                id={`experiencia-${index}`}
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
              <label htmlFor={`pais-${index}`}>País:</label>
              <input
                type="text"
                id={`pais-${index}`}
                name="pais"
                value={formData.ofertas_empleo[index].pais}
                onChange={(e) => handleOfertaInputChange(e, index)}
                required
              />
              <label htmlFor={`ciudad-${index}`}>Ciudad:</label>
              <input
                type="text"
                id={`ciudad-${index}`}
                name="ciudad"
                value={formData.ofertas_empleo[index].ciudad}
                onChange={(e) => handleOfertaInputChange(e, index)}
                required
              />
            </div>
          ))}
          <button type="button" onClick={handleAddOferta}>
            Agregar Oferta
          </button>
        </div>

        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegisterCompany;