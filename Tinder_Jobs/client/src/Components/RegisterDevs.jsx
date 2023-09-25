// 1. modificar el ingreso de habilidades para poder seleccionar varias a la vez 
// 2. comprobar funcionamieno

import { useState } from 'react';
import BtnSocialMedia from '../Components/BtnSocialMedia';
import '../styles/RegisterDevs.css';
import 'font-awesome/css/font-awesome.min.css';

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
    
    const handleHabilidadChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            // Agregar la habilidad al array
            setFormData((prevData) => ({
            ...prevData,
            habilidades: [...prevData.habilidades, value],
            }));
        } else {
            // Remover la habilidad del array
            setFormData((prevData) => ({
            ...prevData,
            habilidades: prevData.habilidades.filter((habilidad) => habilidad !== value),
            }));
        }
    };

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
        <div className="container mt-4 mb-4">
        <div className="row justify-content-center">
            <div className="col-md-7">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title text-center mt-3 mb-4">
                        <i className="fa fa-pencil"></i>
                        Regístrate
                        </h3>
                    <form onSubmit={handleSubmit}>
                        <h5>Información personal</h5>
                        <div className="row mb-2">
                            <div className="col-md-6">
                                <div className="mb-1">
                                <label htmlFor="nombres" className="form-label">Nombres</label>
                                <input id="nombres" className="form-control"
                                type="text" 
                                name='nombres'
                                value={formData.nombres}
                                onChange={handleChange}
                                required
                                />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-1">
                                <label htmlFor="apellidos" className="form-label">Apellidos</label>
                                <input id="apellidos" className="form-control"
                                type="text"
                                name="apellidos"
                                value={formData.apellidos}
                                onChange={handleChange}
                                required
                                />
                                </div>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-md-6">
                                <div className="mb-1">
                                <label htmlFor="telefono" className="form-label">Teléfono</label>
                                <input id="telefono" className="form-control" 
                                type="text" 
                                name="telefono"
                                value={formData.telefono}
                                onChange={handleChange}
                                required
                                />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-1">
                                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                                <input id="email" className="form-control"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                />
                                </div>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-md-6">
                                <div className="mb-1">
                                <label htmlFor="pais" className="form-label">País</label>
                                <input id="pais" className="form-control"
                                type="text"
                                name="pais"
                                value={formData.pais}
                                onChange={handleChange}
                                required
                                />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-1">
                                <label htmlFor="ciudad" className="form-label">Ciudad</label>
                                <input id="ciudad" className="form-control"
                                type="text"
                                name="ciudad"
                                value={formData.ciudad}
                                onChange={handleChange}
                                required
                                />
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <input id="password" className="form-control"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            />
                        </div>
                        <h5>Habilidades Técnicas</h5>
                        <div className="row mb-2">
                            <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="rol" className="form-label">Rol</label>
                                <select id="rol" className="form-select"
                                name="rol"
                                value={formData.rol}
                                onChange={handleChange}
                                required
                                >
                                    <option value="">Seleccionar Rol</option>
                                    <option value="front">Front-end</option>
                                    <option value="back">Back-end</option>
                                    <option value="fullstack">Fullstack</option>
                                </select>
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="experiencia" className="form-label">Experiencia</label>
                                <select id="experiencia" className="form-select"
                                name="experiencia"
                                value={formData.experiencia}
                                onChange={handleChange}
                                required
                                >
                                    <option value="">Seleccionar Experiencia</option>
                                    <option value="sin experiencia">Sin Experiencia</option>
                                    <option value="practicas">Prácticas</option>
                                    <option value="1 año">1 año</option>
                                    <option value="2 años">2 años</option>
                                    <option value="3 años">3 años</option>
                                    <option value="mas de 4">Más de 4 años</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        <label className="form-label">Stack tecnológico</label>
                        <div className="row mb-3">
                            <div className='col-md-4'>
                            <div className="form-check">
                                <input id="html" className="form-check-input"
                                type="checkbox" 
                                name="html"
                                value="HTML"
                                checked={formData.habilidades.includes('HTML')}
                                onChange={handleHabilidadChange}
                                />
                                <label className="form-check-label" htmlFor="html">HTML</label>
                            </div>
                            <div className="form-check">
                                <input id="css" className="form-check-input"
                                type="checkbox" 
                                name="css"
                                value="CSS"
                                checked={formData.habilidades.includes('CSS')}
                                onChange={handleHabilidadChange}
                                />
                                <label className="form-check-label" htmlFor="css">CSS</label>
                            </div>
                            <div className="form-check">
                                <input id="javascript" className="form-check-input"
                                type="checkbox" 
                                name="javascript"
                                value="JAVASCRIPT"
                                checked={formData.habilidades.includes('JAVASCRIPT')}
                                onChange={handleHabilidadChange}
                                />
                                <label className="form-check-label" htmlFor="javascript">JAVASCRIPT</label>
                            </div>
                            </div>
                            <div className='col-md-4'>
                            <div className="form-check">
                                <input id="node.js" className="form-check-input"
                                type="checkbox" 
                                name="node.js"
                                value="NODE.JS"
                                checked={formData.habilidades.includes('NODE.JS')}
                                onChange={handleHabilidadChange}
                                />
                                <label className="form-check-label" htmlFor="node.js">NODE.JS</label>
                            </div>
                            <div className="form-check">
                                <input id="react" className="form-check-input"
                                type="checkbox" 
                                name="react"
                                value="REACT"
                                checked={formData.habilidades.includes('REACT')}
                                onChange={handleHabilidadChange}
                                />
                                <label className="form-check-label" htmlFor="react">REACT</label>
                            </div>
                            </div>
                            <div className='col-md-4'>
                            <div className="form-check">
                                <input id="sql" className="form-check-input"
                                type="checkbox" 
                                name="sql"
                                value="SQL"
                                checked={formData.habilidades.includes('SQL')}
                                onChange={handleHabilidadChange}
                                />
                                <label className="form-check-label" htmlFor="sql">SQL</label>
                            </div>
                            <div className="form-check">
                                <input id="nosql" className="form-check-input"
                                type="checkbox" 
                                name="nosql"
                                value="NOSQL"
                                checked={formData.habilidades.includes('NOSQL')}
                                onChange={handleHabilidadChange}
                                />
                                <label className="form-check-label" htmlFor="nosql">NOSQL</label>
                            </div>
                            </div>
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary">Registrarse</button>
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

export default RegisterDevs;
