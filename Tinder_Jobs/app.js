// conexion mongo 
// user: sala
// password: 12345sala

const express = require ('express');
const app = express();
const cors = require ('cors');
const mongoose = require ('mongoose');
const routes = require ('./server/Routes/routes')
const port = 3001;

app.use (express.json());
app.use (cors());
app.use ('/api', routes)

app.listen (port, () => {
    console.log (`Servidor en ejecucion en el puerto ${port}`)
});

const mongoConect = async () => {
    try {
        await mongoose.connect (
            'mongodb+srv://sala:12345sala@proyectofinal.fxkkgpo.mongodb.net/?retryWrites=true&w=majority'
        )
        console.log ('conectado con MongoDB')
    }
    catch (err) {
        console.log (err)
    }
}

mongoConect()
