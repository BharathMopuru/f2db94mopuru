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

const dog_controlers= require('../controllers/dog');
var router = express.Router();
/* GET costumes */
router.get('/', dog_controlers.dog_view_all_Page );

module.exports = router;

