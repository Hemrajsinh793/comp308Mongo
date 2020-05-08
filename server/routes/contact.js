let express = require('express');
let router = express.Router();
let contactController=require('../controllers/contact');

let passport=require('passport');

function requireAuth(req,res,next){
   //check if user is logged in or not?
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}


/*GET contact list page- READ operation */
router.get('/', requireAuth, contactController.displayContactList);

//GET route for Add page adn will display add page
router.get('/add', requireAuth, contactController.displayAddPage);

//POST routes for Add Contact
router.post('/add', requireAuth, contactController.processAddPage);

//Get request for edit contact
router.get('/edit/:id', requireAuth, contactController.displayEditPage);
//post request for edit method
router.post('/edit/:id', requireAuth,contactController.processEditPage);
//Get method for delete request
router.get('/delete/:id', requireAuth,contactController.performDelete);

module.exports = router;