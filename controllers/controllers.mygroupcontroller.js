const {mygroup} = require('../models/models.mygroup');

function mygroupRequest (req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type','application/json');
    if(req.method=='GET'){

        if(typeof req.params.mygroupID !== 'undefined'){
            let dem = 0;
            for (let i=0 ;i<mygroup.length;i++)
            {
                if(req.params.mygroupID.toString() === mygroup[i].id.toString()){
                    dem = 1;
                    res.status(200).json(mygroup[i]);
                    break;
                }
            }

            if(dem==0){
                res.status(400).json({error:'not valid'});
            }
        }
        else{
            res.status(400).json({error:'not valid'});
        }
    }
    else{
        if(req.method=='POST'){
            req.on('data', (data)=>{
                var dem = 0;
                const newfriend = JSON.parse(data.toString());

                if(newfriend.id.toString()==='19110340'||newfriend.id.toString()==='19110039'||newfriend.id.toString()==='19110492'){
                    for(var i=0;i<mygroup.length;i++){
                        if(mygroup[i].id.toString()===newfriend.id.toString()){
                            dem = 1;
                            res.end('Not valid');
                            break;
                        }
                    }
                }
                else{
                    dem = 1;
                    res.end('Not valid');
                }

                if(dem==0){
                    mygroup.push(newfriend);
                    req.pipe(res);
                    res.end();
                }
            });
        }
    }
}

module.exports = {
    mygroupRequest
}