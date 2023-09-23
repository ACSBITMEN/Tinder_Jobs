const express = require ('express');
const router = express.Router();
const companyController = require ('../Controllers/companyController');

router.get('/all/companies', companyController.getAllCompany);
router.get('/companies/:id', companyController.getOneCompany);
router.post('/companies', companyController.createCompany);
router.patch('/companies/:id', companyController.updateCompany);
router.delete('/companies/:id', companyController.deleteCompany);
router.post('/loginCompany', companyController.loginCompany)

module.exports = router;