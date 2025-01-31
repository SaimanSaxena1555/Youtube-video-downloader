const express = require('express');
const ytdl = require('ytdl-core');
const app = express();
const port = 3000;


app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/',(req , res) =>{
    res.sendFile(__dirname + '/index.html');
})


