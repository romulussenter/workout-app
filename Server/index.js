const path = require('path')
const express = require('express');
const axios = require('axios');


require('dotenv').config();
const {API_KEY } = process.env;
console.log(API_KEY);

const serverApp =express();
const port = process.env.PORT || 5000;



serverApp.use(express.static('client/build'));

serverApp.get('/forecast/:lat,:lon', function(request, response){
    const url =`https://wger.de/api/v2/${API_KEY}`
    axios.get(url)
    .then(res => {
        response.status(200).json(res.data);
    })
    .catch(err => {
        response.status(500).json({
            msg:'Your stuff is broked.'
        });
    });
});

serverApp.get('*', (request, response) =>{
    response.sendFile('index.html', {root: path.resolve('client/build') });
});

serverApp.listen(port, () => {
    console.log(`Now listening on port ${port}`);
})