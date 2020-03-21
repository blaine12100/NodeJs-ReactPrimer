const mongoose = require('mongoose');

//Schema for our Battle DB
var battleSchema = mongoose.Schema({
    name: String, // String is shorthand for {type: String}
    year: Number,
    battle_number: Number,
    attacker_king: String,
    defender_king: String,
    attacker_1: String,
    attacker_2: String,
    attacker_3: String,
    attacker_4: String,
    defender_1: String,
    defender_2: String,
    defender_3: String,
    defender_4: String,
    attacker_outcome: String,
    battle_type: String,
    major_death: Number,
    major_capture: Number,
    attacker_size: String,
    attacker_commander: String,
    defender_commander: String,
    defender_king: String,
    summer: Number,
    location: String,
    region: String,
    note: String,
});

/*Collection Name is a very important parameter.Without it we cannot define that which collection should
this model be able to access*/

module.exports = mongoose.model("battle_model", battleSchema, "battle_data")
