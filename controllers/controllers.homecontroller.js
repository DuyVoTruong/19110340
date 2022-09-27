const {mygroup} = require('../models/models.mygroup');

function homeRequest(req,res){
    res.setHeader('Content-Type','application/json');
    res.status(200).json(mygroup);
}

module.exports = {
    homeRequest
}