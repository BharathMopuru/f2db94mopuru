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
/*// Handle Dog delete form on DELETE.
exports.dog_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Dog delete DELETE ' + req.params.id);
};*/
// Handle Dog delete on DELETE. 
exports.dog_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Dog.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
/*// Handle Dog update form on PUT.
exports.dog_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: dog update PUT' + req.params.id);
};*/
// Handle Costume update form on PUT. 
exports.dog_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Dog.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.dog_Name)  
               toUpdate.dog_Name = req.body.dog_Name; 
        if(req.body.dog_Price) toUpdate.dog_Price = req.body.dog_Price; 
        if(req.body.dog_Breed) toUpdate.dog_Breed = req.body.dog_Breed; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

// Handle a show one view with id specified by query
exports.dog_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Dog.findById( req.query.id)
    res.render('dogdetail',
   { title: 'Dog Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a dog. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.dog_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('dogcreate', { title: 'Dog Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a dog. 
// query provides the id 
exports.dog_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Dog.findById(req.query.id) 
        res.render('dogupdate', { title: 'Dog Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 