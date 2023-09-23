const express = require ('express');
const router = express.Router();


// Rutas Desarrolladores
const devRoutes = require ('./devRoutes');
router.use ('/', devRoutes);

// Rutas Empresas
const companyRoutes = require ('./companyRoutes')
router.use ('/', companyRoutes);

const devMatch = require ('./MatchRoutes')
router.use ('/', devMatch)

module.exports = router;