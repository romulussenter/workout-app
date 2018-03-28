const express = require('express');
const serverApp =express();
const mongoose = require('mongoose');


require('dotenv').config();
mongoose.connect(process.env.MONGO_URI);
const port = process.env.PORT || 5000;


//This is my workout router

const workoutsRouter = require('./router/Workouts')

serverApp.use(express.static('client/build'));

serverApp.get('/', (req, res)=>{
   res.send('YAY');
});
    
// serverApp.use(notFound);
// serverApp.use(serverError);

  serverApp.get('*', (request, response) =>{
    response.sendFile('index.html', {root: path.resolve('client/build') });
});

serverApp.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
})