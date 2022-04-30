// const routes = require('express').Router();

// routes.get('/', (req, res) => {
//   res.send('Jenny Sanderson');
// });

// module.exports = routes;

const routes = require('express').Router();
const contactController = require('../controllers/contactController');

routes.get('/', contactController.getContacts);
routes.get('/:id', contactController.getContact);

module.exports = routes;