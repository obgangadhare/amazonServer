const  mongoose  = require('mongoose');
const routes = require('./Routes/index');
const  express = require('express');
const bodyParser = require ('body-parser');
const app = express();

app.use(bodyParser.json());


app.use((req,res,next)=>{    
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
    next();

})

app.use('/',routes);
const url = "mongodb://127.0.0.1:27017/amazon";
const PORT = 5020;
mongoose.connect(
    url,
    {
      
    }
).then(success =>{
    console.log("Connected to mongodb");
    app.listen(PORT,() => {
        console.log(`server is running on http://localhost:${PORT}`);
    });
}).catch(error =>{
    console.log(`Cannot connect to mongodb:${error}`);
})



