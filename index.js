const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}



const url = 'mongodb://127.0.0.1:27017/datosbd';
mongoose.connect(url);

const port = 3001;
const app = express();
app.use(cors(corsOptions));
//use
app.use(express.json());
app.use('/api', require('./routes/api.js'));

app.listen(port, () => {
    console.log(`Sever Listening in http://localhost:${port}`)
})