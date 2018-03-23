const axios = require('axios');
const express = require('express');

require('dotenv').config();
const {Authorization} = process.env;
console.log(Authorization);
const serverApp =express();
const port = process.env.PORT || 5000;

 const url = 'https://wger.de/api/v2/....'
 const data = '{"key": "value"}'
 const headers = {'Accept': 'application/json'}

 serverApp.get('*', (request, response) =>{
    response.sendFile('index.html', {root: path.resolve('client/build') });
});

serverApp.listen(port, () => {
    console.log(`Now listening on port ${port}`);
})

 

export default FitnessAPI;