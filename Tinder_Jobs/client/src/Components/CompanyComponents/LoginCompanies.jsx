import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BtnSocialMedia from '../BtnSocialMedia'

const LoginCompanies = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [id, setCompanyId] = useState(null); 

    const navigate = useNavigate();
    
    const handleRegisterClick = () => {
      navigate('/RegisterCompany'); // Redirige a la página de registro
    };  

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
<div id='containerLoginDev' className="container pt-5 mb-4">
    <div className="row justify-content-center">
        <div className="col-md-6">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title text-center mt-3">
                        <i className="fa fa-key"></i> Iniciar Sesión
                    </h3>
                    {/* Formulario de inicio de sesión */}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <label htmlFor="email" className="form-label mb-1">Email</label>
                            <input 
                            type="email"
                            id="email"
                            className="form-control" 
                            value={email}
                            onChange={handleEmailChange}
                            required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label mb-1">Contraseña</label>
                            <input 
                            type="password"
                            id="password"
                            className="form-control" 
                            value={password}
                            onChange={handlePasswordChange}
                            required
                            />
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary mt-2" id='btnLogin'>Iniciar Sesión</button>
                            {errorMessage && (
                            <div className="alert alert-danger mt-2" role="alert">
                              {errorMessage}
                            </div>
                            )}
                            <button type="button" className="btn btn-secondary" onClick={handleRegisterClick}>Registrarse</button>
                        </div>
                    </form>
                    <BtnSocialMedia/>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}   

export default LoginCompanies