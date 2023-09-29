const express = require ('express');
const router = express.Router();
const companyController = require ('../Controllers/companyController');

router.get('/companies', companyController.getAllCompany);
router.get('/companies/:id', companyController.getOneCompany);
router.post('/companies/create', companyController.createCompany);
router.patch('/companies/:id/edit', companyController.updateCompany);
router.delete('/companies/:id/delete', companyController.deleteCompany);
router.post('/companies/loginCompany', companyController.loginCompany)

module.exports = router;