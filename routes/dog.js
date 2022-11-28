//var express = require('express');
//var router = express.Router();

// class Dog {
//   constructor(dog_Name, dog_Price, dog_Breed){
//     this.dog_Name = dog_Name;
//     this.dog_Price = dog_Price;
//     this.dog_Breed = dog_Breed;
//   }
// }

/* GET home page. */
/*router.get('/', function(req, res, next) {
  let dog1 = new Dog('jack', 4000, "pug");
  let dog2 = new Dog('doller', 3000, "Bulldog");
  let dog3 = new Dog('gun', 3500, 'Retriever')
  res.render('dog', { title: 'Search Results Dog', dog : [dog1, dog2, dog3] });
});
*/
var express = require('express');

const dog_controllers= require('../controllers/dog');
var router = express.Router();
/* GET costumes */
router.get('/', dog_controllers.dog_view_all_Page );
// GET request for one dog. 
router.get('/dog/:id', dog_controllers.dog_detail); 

/* GET detail dog page */
router.get('/detail', dog_controllers.dog_view_one_Page);
/* GET create dog page */ 
router.get('/create', dog_controllers.dog_create_Page); 

// A little function to check if we have an authorized user and continue on or 
// redirect to login. 
const secured = (req, res, next) => { 
  if (req.user){ 
    return next(); 
  } 
  req.session.returnTo = req.originalUrl; 
  res.redirect("/login"); 
} 


/* GET create update page */ 
router.get('/update', secured, dog_controllers.dog_update_Page); 


/* GET delete dog page */ 
router.get('/delete', dog_controllers.dog_delete_Page); 

 

module.exports = router;

