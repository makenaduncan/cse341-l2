const routes = require('express').Router();
const contactController = require('../controllers/contactController');

routes.get('/', contactController.getContacts);
routes.get('/:id', contactController.getContact);

routes.post('/', contactController.createContact);
routes.put('/:id', contactController.updateContact);
routes.delete('/:id', contactController.deleteContact);

module.exports = routes;
