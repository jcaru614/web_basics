const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors())

app.use(express.urlencoded({extended:true}));
app.use(express.json());

//This is were we are requiring the files from config, controllers,
// models, and routes 
require('./models/product.model');
require('./config/config');
require('./routes/product.routes')(app);

app.listen(8000, () => {
    console.log("listening on port 8000");
});
