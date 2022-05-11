const routes = require('express').Router();
const contactController = require('../controllers/contactController');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');

routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', swaggerUi.setup(swaggerDocument));

routes.get('/', contactController.getContacts);
routes.get('/:id', contactController.getContact);

routes.post('/', contactController.createContact);
routes.put('/:id', contactController.updateContact);
routes.delete('/:id', contactController.deleteContact);

module.exports = routes;
