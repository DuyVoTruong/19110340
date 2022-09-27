const express = require('express');
const app = express();
const PORT = 5000;

const homeRequest = require('./routes/routes.home');
const mygroupRequest = require('./routes/routes.mygroup');
const messageRequest = require('./routes/routes.message');

app.use(express.json());
app.use((req, res, next) => {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log('Method:',req.method,'; URL: ',fullUrl);
    next();
});
app.use('/',homeRequest);
app.use('/19110340',mygroupRequest);
app.use('/message',messageRequest);

app.listen(PORT,()=>{
    console.log(`Server is listening at ${PORT}`);
})