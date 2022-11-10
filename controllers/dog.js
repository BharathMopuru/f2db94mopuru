var Dog = require('../models/dog');
// List of all Costumes
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
 res.send('NOT IMPLEMENTED: Costume list');
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
// for a specific Costume.
exports.dog_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: dog detail: ' + req.params.id);
};
// Handle Dog create on POST.
exports.dog_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Dog create POST');
};
// Handle Dog delete form on DELETE.
exports.dog_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Dog delete DELETE ' + req.params.id);
};
// Handle Dog update form on PUT.
exports.dog_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Costume update PUT' + req.params.id);
};
