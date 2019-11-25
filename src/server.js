const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://desenvolvedor:desenvolvimento123@cluster0-gedzb.mongodb.net/taskit?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);


app.get('/', (req, res)=>{

    res.status(200);
    res.send('Hello world');

})
app.listen(3000, ()=>{
    console.log('SERVER RUNNING');
});