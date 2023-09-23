// 1. modificar el ingreso de habilidades para poder seleccionar varias a la vez 
// 2. comprobar funcionamieno

import React, { useState } from 'react';

function RegisterDevs() {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    telefono: '',
    email: '',
    rol: '',
    habilidades: [],
    experiencia: '',
    pais: '',
    ciudad: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/devs/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        alert('Registro exitoso');
        // Puedes redirigir al usuario a otra página aquí si lo deseas
      } else {
        alert('Error al registrar al desarrollador');
      }
    } catch (error) {
      console.error('Error en la solicitud POST:', error);
    }
  };

  return (
    <div>
      <h2>Registro de Desarrollador</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombres">Nombres:</label>
          <input
            type="text"
            id="nombres"
            name="nombres"
            value={formData.nombres}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="apellidos">Apellidos:</label>
          <input
            type="text"
            id="apellidos"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="text"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="rol">Rol:</label>
          <select
            id="rol"
            name="rol"
            value={formData.rol}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar Rol</option>
            <option value="back">Backend</option>
            <option value="front">Frontend</option>
            <option value="fullstack">Fullstack</option>
          </select>
        </div>

        <div>
        <label htmlFor="habilidades">Habilidades:</label>
        <select
            id="habilidades"
            name="habilidades"
            value={formData.habilidades}
            onChange={handleChange}
            multiple 
            required
        >
            <option value="html">HTML</option>
            <option value="javascript">JavaScript</option>
            <option value="react">React</option>
            <option value="node.js">Node.js</option>
            <option value="sql">SQL</option>
            <option value="nosql">NoSQL</option>
            <option value="css">CSS</option>
        </select>
        </div>

        <div>
          <label htmlFor="experiencia">Experiencia:</label>
          <select
            id="experiencia"
            name="experiencia"
            value={formData.experiencia}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar Experiencia</option>
            <option value="practicas">Prácticas</option>
            <option value="sin experiencia">Sin experiencia</option>
            <option value="1 año">1 año</option>
            <option value="2 años">2 años</option>
            <option value="3 años">3 años</option>
            <option value="mas de 4">Más de 4 años</option>
          </select>
        </div>
        <div>
          <label htmlFor="pais">País:</label>
          <input
            type="text"
            id="pais"
            name="pais"
            value={formData.pais}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="ciudad">Ciudad:</label>
          <input
            type="text"
            id="ciudad"
            name="ciudad"
            value={formData.ciudad}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default RegisterDevs;
