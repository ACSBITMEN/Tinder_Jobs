const express = require ('express');
const router = express.Router();
const devController = require ('../Controllers/devController');

router.get('/devs', devController.getAllDevs);
router.get('/devs/:id', devController.getOneDev);
router.post('/devs/create', devController.createDev);
router.patch('/devs/:id/edit', devController.updateDev);
router.delete('/devs/:id/delete', devController.deleteDev);
router.post('/devs/loginDev', devController.loginDev)

module.exports = router;