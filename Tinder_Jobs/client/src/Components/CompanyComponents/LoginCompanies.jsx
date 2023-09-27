import React, { useState, useEffect } from 'react';
import axios from 'axios';

import RegisterCompany from './RegisterCompanies';

const LoginCompanies = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [id, setCompanyId] = useState(null); 

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('http://localhost:3001/api/companies/loginCompany', {
            email,
            password,
          });
    
          if (response.status === 200) {
            const id = response.data.id;
            setLoggedIn(true);
            setCompanyId(id); 
            window.location.href = `http://localhost:5173/companies/perfil/${id}`;
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
          window.location.href = `http://localhost:5173/companies/perfil/${id}`;
        }
      }, [loggedIn, id]);

    return (
      <>
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

        <div>
          <RegisterCompany/>
        </div>


        </>
  );
}   

export default LoginCompanies