const express = require('express');
const OngControler = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')
const router = express.Router();

router.get('/sessions', SessionController.create)

router.get('/ongs', OngControler.index);
router.post('/ongs', OngControler.create);

router.get('/profile', ProfileController.listEspecificForOng);

router.post('/incidents', IncidentController.create);
router.get('/incidents', IncidentController.index);
router.delete('/incidents/:id', IncidentController.delete);

module.exports = router;