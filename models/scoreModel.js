const mongoose = require('mongoose');

const ScoreSchema = new mongoose.Schema({
    playerName: {type: Array},
    playerScore: {type: Array}
})

module.exports = mongoose.model('Score', ScoreSchema);