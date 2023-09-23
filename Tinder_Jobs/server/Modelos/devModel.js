
const mongoose = require('mongoose');

const devSchema = new mongoose.Schema({
    nombres: {
        type: String,
        lowercase: true,
        required: true
    },

    apellidos : {
        type: String,
        lowercase: true,
        required: true
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

    rol: {
        type: String,
        required: true,
        lowercase: true,
        enum: ['back', 'front', 'fullstack']
    },

    habilidades: [
        {
            _id: false,
            nombre:{
            type: String,
            _id: false,
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
        required: true,
        lowercase: true
    },
    
    ciudad: {
        type: String,
        required: true,
        lowercase: true
    },

    password: {
        type: String,
        requeried: true,
        unique: true
    }

})

const Dev = mongoose.model("Dev", devSchema);

module.exports = Dev;