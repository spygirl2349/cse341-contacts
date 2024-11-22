const router = require('express').Router();
const controller = require('../controller/index');

router.get('/', controller.getAll);
router.get('/:id', controller.getSingle);

router.post('/', controller.createContact);
router.put('/:id', controller.updateContact);
router.delete('/:id', controller.deleteContact);


module.exports = router; 