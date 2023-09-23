
const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    nombres: {
        type: String,
        required: true,
        unique: true
    },

    telefono: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    ofertas_empleo: [
        {
            rol: {
                type: String,
                lowercase: true,
                required: true,
                enum: ['back', 'front', 'fullstack']
            },
        
            habilidades: [
                {
                    _id: false,
                    nombre:{
                    type: String,
                    required: true,                    
                    lowercase: true,
                    enum: ['html', 'javascript', 'react', 'node.js', 'sql', 'nosql', 'css'] 
                    }
                }
            ],
        
            experiencia: {
                type: String,
                required: true,
                lowercase: true,
                _id: false,
                enum: ['practicas', 'sin experiencia', '1 año', '2 años', '3 años', 'mas de 4'] 
            },
        
            pais:{
                type: String,
                lowercase: true,
                required: true
            },
        
            ciudad: {
                type: String,
                lowercase: true,
                required: true
            } 
        },
    ],

    password: {
        type: String,
        requeried: true,
        unique: true
    }
})

const Company = mongoose.model("Company", companySchema);

module.exports = Company;







// CODIGO PARA AGREGAR NUEVAS OFERTAS DE EMPLEO


// import React, { useState } from 'react';

// const AgregarOfertaEmpleo = ({ empresaId }) => {
//   const [nuevaOferta, setNuevaOferta] = useState({
//     rol: '',
//     habilidades: [],
//     experiencia: 0,
//     pais: '',
//     ciudad: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNuevaOferta({ ...nuevaOferta, [name]: value });
//   };

//   const agregarOferta = () => {
    // Aquí deberías enviar los datos de nuevaOferta al servidor
    // y agregarlos a la base de datos de la empresa con el ID empresaId.
    // Puedes usar una llamada a una API REST o GraphQL para hacerlo.
    // Asegúrate de manejar las solicitudes asíncronas adecuadamente.

    // Después de agregar la oferta, puedes reiniciar el estado del formulario:
//     setNuevaOferta({
//       rol: '',
//       habilidades: [],
//       experiencia: 0,
//       pais: '',
//       ciudad: '',
//     });
//   };

//   return (
//     <div>
//       <h2>Agregar Oferta de Empleo</h2>
//       <form>
//         <label>Rol:</label>
//         <input type="text" name="rol" value={nuevaOferta.rol} onChange={handleChange} />

//         <label>Habilidades (separadas por comas):</label>
//         <input type="text" name="habilidades" value={nuevaOferta.habilidades} onChange={handleChange} />

//         <label>Experiencia:</label>
//         <input type="number" name="experiencia" value={nuevaOferta.experiencia} onChange={handleChange} />

//         <label>País:</label>
//         <input type="text" name="pais" value={nuevaOferta.pais} onChange={handleChange} />

//         <label>Ciudad:</label>
//         <input type="text" name="ciudad" value={nuevaOferta.ciudad} onChange={handleChange} />

//         <button type="button" onClick={agregarOferta}>
//           Agregar Oferta
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AgregarOfertaEmpleo;
