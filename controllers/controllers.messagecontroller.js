const {mygroup} = require('../models/models.mygroup');

function messageRequest(req,res){
    res.setHeader('Content-Type','text/html');
    res.status(200);
    if(typeof req.params.messageID == 'undefined'){
        for(var i = 0;i<mygroup.length;i++){
            res.write(`<html><body><ul><li>${mygroup[i].name}</li></ul></body></html>`);
        }
    }
    else{
        const ID = Number(req.params.messageID);
        var dem = 0;
        for(var i = 0;i<mygroup.length;i++){
            if(ID.toString()===mygroup[i].id.toString()){
                dem = 1;
                res.write(`<html><body><ul><li>${mygroup[i].name}</li></ul></body></html>`);
            }
        }
        if(dem==0){
            res.write(`<html><body><p>Not valid</p></body></html>`);
        }
    }
    res.end();
}

module.exports = {
    messageRequest
}