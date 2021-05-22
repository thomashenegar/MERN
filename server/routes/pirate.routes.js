const PirateController = require("../controllers/pirate.controllers");


module.exports = app => {

    //CREATE
    app.post("/api/pirate/new", PirateController.createOne)
    //GET ALL
    app.get("/api/pirate", PirateController.findAll);
    //GET ONE
    app.get("/api/pirate/:id", PirateController.findOnePirate);
    //DELETE ONE
    app.delete("/api/pirate/delete/:id", PirateController.deleteOnePirate);
}