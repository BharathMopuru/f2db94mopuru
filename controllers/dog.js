var Dog = require('../models/dog');
// List of all dogs
exports.dog_list = async function(req, res) {
    try{
    theDogs = await Dog.find();
    res.send(theDogs);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};
/*// List of all dogs
exports.dog_list = function(req, res) {
 res.send('NOT IMPLEMENTED: dog list');
};*/
// VIEWS
// Handle a show all view
exports.dog_view_all_Page = async function(req, res) {
    try{
    theDogs = await Dog.find();
    res.render('dog', { title: 'Dog Search Results', results: theDogs });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

/*// for a specific dog.
exports.dog_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: dog detail: ' + req.params.id);
};*/
// for a specific Dog. 
exports.dog_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Dog.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 

// Handle Costume create on POST.
exports.dog_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Dog();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"dog_type":"goat", "cost":12, "size":"large"}
    document.dog_Name = req.body.dog_Name;
    document.dog_Price = req.body.dog_Price;
    document.dog_Breed = req.body.dog_Breed;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
/*// Handle Dog create on POST.
exports.dog_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Dog create POST');
};*/
// Handle Dog delete form on DELETE.
exports.dog_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Dog delete DELETE ' + req.params.id);
};
// Handle Dog update form on PUT.
exports.dog_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: dog update PUT' + req.params.id);
};
