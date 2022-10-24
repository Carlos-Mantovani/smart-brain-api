const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, resp) => {
    resp.send('this is working')
});

app.listen(3000, () => {
    console.log('app is running');
});

/*
/ --> this is working
/signin --> POST = sucess/fail
/register --> POST = user
/profile/:userId --> GET = user
/image --> PUT --> user
*/