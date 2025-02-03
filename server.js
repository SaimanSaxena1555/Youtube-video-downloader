const express = require('express');
const ytdl = require('ytdl-core');
const cors = require('cors')
const app = express();
const port = 3000;


app.use(cors());

app.use(express.static('public'));

app,get('/download',async (req,res)) => {
    const { url, quality, audioFormat } = req.query;  
}

if(!url){
    return res.status(400).send('Video URL is required!');
}

try{
    const info = await ytdl.chooseFormat(info.format,{filter: 'audioonly', quality: audioFormat });
    if(!format){
        return res.status(400).send('Audio format not available.');
    }
    
}
