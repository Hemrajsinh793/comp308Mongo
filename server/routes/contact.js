let express = require('express');
let router = express.Router();
let contactController=require('../controllers/contact');


/*GET contact list page- READ operation */
router.get('/',contactController.displayContactList);

//GET route for Add page adn will display add page
router.get('/add',contactController.displayAddPage);

//POST routes for Add Contact
router.post('/add',contactController.processAddPage);

//Get request for edit contact
router.get('/edit/:id',contactController.displayEditPage);
//post request for edit method
router.post('/edit/:id',contactController.processEditPage);
//Get method for delete request
router.get('/delete/:id',contactController.performDelete);

module.exports = router;