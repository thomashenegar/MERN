const mongoose = require("mongoose");

const PirateSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, "Pirate must have a name."]
    },
    url:{
        type: String,
        required: [true, "Pirate must have a url link to their picture."]
    },
    numberOfChests:{
        type: Number,
        required: [true, "You must include the number of pirate chests."]
    },
    catchPhrase:{
        type: String,
        required: [true, "Pirate must have a catch phrase."]
    },
    crewPosition:{
        type: String,
        required: [true, "Pirate must have a crew position."]
    },
    eyePatch:{
        type: Boolean
    },
    pegLeg:{
        type: Boolean
    },
    hookHand:{
        type: Boolean
    }
}, {timestamps:true})

const Pirate = mongoose.model("Pirate", PirateSchema);

module.exports = Pirate;