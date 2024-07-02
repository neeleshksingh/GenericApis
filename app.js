const express = require('express');
const connection = require('./connections/connection');
const userRoutes = require('./routes/user');
const User = require('./models/user');
connection();

const app = express();


app.use('/UserData', userRoutes(User, 'User'));


app.get('*', (req, res) => {
    res.status(404).send('Api not found');
})

app.listen(1517 || process.env.PORT, () => console.log("listening on port 1517"));