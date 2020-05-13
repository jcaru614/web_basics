const express= require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 

require('./models/player.model'); 
require('./config/mongoose.config');
require('./routes/player.routes')(app);

app.listen(8000, () => {
    console.log("Listening at Port 8000")
});
