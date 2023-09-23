const express = require ('express');
const router = express.Router();
const MatchController = require ('../Controllers/MatchController');

router.get('/devs/:id/match', MatchController.getDevsMatch);
router.get('/companies/:id/match', MatchController.getCompanyMatch);

module.exports = router;