/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const RegisterDevs = () => {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    telefono: '',
    email: '',
    rol: 'front',
    habilidades: [
      { nombre: 'html', nivel: false },
      { nombre: 'javascript', nivel: false },
      { nombre: 'react', nivel: false },
      { nombre: 'node.js', nivel: false },
      { nombre: 'sql', nivel: false },
      { nombre: 'nosql', nivel: false },
      { nombre: 'css', nivel: false },
    ],
    experiencia: 'practicas',
    pais: '',
    ciudad: '',
    password: '',
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    const updatedHabilidades = formData.habilidades.map((habilidad) =>
      habilidad.nombre === name ? { ...habilidad, nivel: checked } : habilidad
    );
    setFormData({
      ...formData,
      habilidades: updatedHabilidades,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const selectedHabilidades = formData.habilidades.filter(
        (habilidad) => habilidad.nivel
      );
  
      const formDataToSend = {
        ...formData,
        habilidades: selectedHabilidades,
      };
  
      const response = await fetch('http://localhost:3001/api/devs/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSend),
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
      <h1>Registro de Desarrollador</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombres">Nombres:</label>
        <input
          type="text"
          id="nombres"
          name="nombres"
          value={formData.nombres}
          onChange={(e) => setFormData({ ...formData, nombres: e.target.value })}
          required
        />
        <label htmlFor="apellidos">Apellidos:</label>
        <input
          type="text"
          id="apellidos"
          name="apellidos"
          value={formData.apellidos}
          onChange={(e) => setFormData({ ...formData, apellidos: e.target.value })}
          required
        />
        <label htmlFor="telefono">Teléfono:</label>
        <input
          type="text"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <label htmlFor="rol">Rol:</label>
        <select
          id="rol"
          name="rol"
          value={formData.rol}
          onChange={(e) => setFormData({ ...formData, rol: e.target.value })}
        >
          <option value="front">Frontend</option>
          <option value="back">Backend</option>
          <option value="fullstack">Fullstack</option>
        </select>
        <div>
          <p>Habilidades:</p>
          {formData.habilidades.map((habilidad) => (
            <label key={habilidad.nombre}>
              <input
                type="checkbox"
                name={habilidad.nombre}
                checked={habilidad.nivel}
                onChange={handleCheckboxChange}
              />
              {habilidad.nombre}
            </label>
          ))}
        </div>
        <label htmlFor="experiencia">Experiencia:</label>
        <select
          id="experiencia"
          name="experiencia"
          value={formData.experiencia}
          onChange={(e) => setFormData({ ...formData, experiencia: e.target.value })}
        >
          <option value="practicas">Prácticas</option>
          <option value="1 año">1 año</option>
          <option value="2 años">2 años</option>
          <option value="3 años">3 años</option>
          <option value="mas de 4">Más de 4</option>
        </select>

        <label htmlFor="pais">País:</label>
        <input
          type="text"
          id="pais"
          name="pais"
          value={formData.pais}
          onChange={(e) => setFormData({ ...formData, pais: e.target.value })}
          required
        />
        <label htmlFor="ciudad">Ciudad:</label>
        <input
          type="text"
          id="ciudad"
          name="ciudad"
          value={formData.ciudad}
          onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
          required
        />
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegisterDevs;