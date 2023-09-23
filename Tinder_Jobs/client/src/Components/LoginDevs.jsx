// que al realizar el redireccionamiento a 'http://localhost:5173/devs/perfil' se carguen los datos del usuario que accedio 


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LoginDev = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/devs/loginDev', {
        email,
        password,
      });

      if (response.status === 200) {
        setLoggedIn(true);
      } else {
        setErrorMessage('Inicio de sesión fallido');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      setErrorMessage('Error en la solicitud');
    }
  };

  useEffect(() => {
    if (loggedIn) {
      window.location.href = 'http://localhost:5173/devs/perfil';
    }
  }, [loggedIn]);

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default LoginDev;