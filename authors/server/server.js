const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

app.use(express.urlencoded({ extended: true }))

app.use(express.json());

require('./models/author.model');
require('./config/mongoose.config');
require('./routes/author.routes')(app);

app.listen(8000, () => {
    console.log("listening on port 8000!");
});