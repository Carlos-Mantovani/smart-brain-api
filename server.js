const express = require('express');

const app = express();
app.use(express.json())

const PORT = 3000;

const database = {
    users: [
        {
            id: '123',
            name: 'John',
            email: 'john@gmail.com',
            password: 'cookies',
            entries: 0,
            joined: new Date()
        },
        {
            id: '124',
            name: 'Sally',
            email: 'sally@gmail.com',
            password: 'bananas',
            entries: 0,
            joined: new Date()
        }
    ]
}

app.get('/', (req, resp) => {
    resp.send(database.users);
});

app.post('/signin', (req, res) => {
    for (let i = 0; i < database.users.length; i++) {
        if (req.body.email === database.users[i].email && req.body.password === database.users[i].password) {
            res.json('sucess');
        } else {
            res.status(400).json('error logging in');
        }
    }
})

app.post('/register', (req, res) => {
    const { email, name, password } = req.body;
    database.users.push({
        id: database.users.length + 1,
        name: name,
        email: email,
        password: password,
        entries: 0,
        joined: new Date()
    })
    res.json(database.users[database.users.length - 1])
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