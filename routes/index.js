const router = require('express').Router();
const controller = require('../controller/index');
// router.get('/', (res, req) => {
//     res.send('router testing');
// });

router.get('/contacts', controller.getAll);
router.get('/contacts/:id', controller.getSingle);
// router.use('/contacts', require('./contacts'));

module.exports = router;

//next: Step 5, video 5 ish minutes in