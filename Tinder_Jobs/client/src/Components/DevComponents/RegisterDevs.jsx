// 1. modificar el ingreso de habilidades para poder seleccionar varias a la vez 
// 2. comprobar funcionamieno

import { useState } from 'react';
import { Link } from 'react-router-dom';
import BtnSocialMedia from '../BtnSocialMedia';
import '../../styles/RegisterDevs.css';
import 'font-awesome/css/font-awesome.min.css';

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
        <>
        <div>
            <Link to="/devs" className="btn m-2"> ← Volver a login</Link>
        </div>
        <div id='formRegister' className="container mt-0 mb-1">
        <div className="row justify-content-center">
            <div className="col-md-7">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title text-center mt-3 mb-3">
                        <i className="fa fa-pencil"></i>
                        Regístro Desarrollador
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
                                onChange={(e) => setFormData({ ...formData, nombres: e.target.value })}
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
                                onChange={(e) => setFormData({ ...formData, apellidos: e.target.value })}
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
                                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
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
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                                onChange={(e) => setFormData({ ...formData, pais: e.target.value })}
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
                                onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
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
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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
                                onChange={(e) => setFormData({ ...formData, rol: e.target.value })}
                                required
                                >
                                    <option value="front">Frontend</option>
                                    <option value="back">Backend</option>
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
                                    onChange={(e) => setFormData({ ...formData, experiencia: e.target.value })}
                                    required
                                    >
                                        <option value="practicas">Prácticas</option>
                                        <option value="1 año">1 año</option>
                                        <option value="2 años">2 años</option>
                                        <option value="3 años">3 años</option>
                                        <option value="mas de 4">Más de 4</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <label className="form-label">Stack tecnológico</label>
                        <div id='containerStack' className="mb-3 d-flex flex-wrap">
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
    </>
    );
}
export default RegisterDevs;
