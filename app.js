const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const scoreModel = require('./models/scoreModel');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

// Mongoose setup

mongoose.connect('mongodb://localhost/score_keeper', {useNewUrlParser: true}, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('Mongo connected');
    }
})

app.get('/', (req, res) => {
    res.render('home');
})

app.post('/playersubmit', (req, res) => {
    let player1Name = req.body.player1;
    let player2Name = req.body.player2;
    let player3Name = req.body.player3;
    let player4Name = req.body.player4;
    scoreModel.create({
        playerName: [player1Name, player2Name, player3Name, player4Name],
        playerScore: [[0, 0, 0, 0]]
    }, (err, scoreCreated) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect(`/games/${scoreCreated._id}`)
        }
    })
})

app.post('/games/:id', (req, res) => {
    const data = req.body.name;
    const id = req.params.id;
    scoreModel.findByIdAndUpdate(id, {playerScore: data} ,(err, data) => {
        if (err) {
            console.log(err);
        }
    })
})

app.get('/games/:id', (req, res) => {
    let id = req.params.id;

    scoreModel.findById(id, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            let playerName = data.playerName;
            let playerScore = data.playerScore;
            res.render('playground', {playerName: playerName, playerScore: playerScore})
        }
    })
})

app.listen(8080, () => {
    console.log('Server connected');
})
