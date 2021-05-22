const express= require("express");
const app = express();
const port = 8000;
const cors = require("cors");

//USE CORS
app.use(cors());

//BRING IN MONGOOSE/CONNECT TO DB
require("./server/config/mongoose.config");

//HANDLE POST REQUESTS
app.use(express.json(), express.urlencoded({extended: true}));

//CONNECT TO THE ROUTES
require("./server/routes/pirate.routes")(app);

app.listen(port, () => console.log(`Running on port ${port}.`));