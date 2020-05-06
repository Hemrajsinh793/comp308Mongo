let express = require('express');
let router = express.Router();
let indexController=require('../controllers/index');

/* GET home page. */
router.get('/',indexController.displayHomePage);

/* GET about page. */
router.get('/about',indexController.displayAboutPage );

/* GET products page. */
router.get('/products', indexController.displayProductsPage);

/* GET services page. */
router.get('/services',indexController.displayServicesPage);

/* GET contact page. */
router.get('/contacts',indexController.diplayContactPage );

//GET display login page
router.get('/login',indexController.displayLoginPage);

//POST process login page
router.post('/login',indexController.processLoginPage);

//GET display registration page
router.get('/register',indexController.displayRegisterPage);

//POST process Registration page
router.post('/register',indexController.processLoginPage);

//GET to perform logout
router.get('/logout', indexController.performLogout);

module.exports = router;
