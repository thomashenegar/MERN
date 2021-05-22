const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/exam", {
    useNewUrlParser:true,
    useUnifiedTopology: true
})
    .then(()=> console.log("Found the mongoose!"))
    .catch(err=> console.log("Lost the mongoose.", err))
