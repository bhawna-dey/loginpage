const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const res = require('express/lib/response');


app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/index.html');
  });

app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/static/form.html');
});


app.post('/form', (req, res) =>{
    let username = req.body.username;
    let password = req.body.password;
    if(username == "admin" && password == "user")
{
    res.send(`User login sucessful: Username: ${username} Password:${password}`)
}
     else {
        return res.status(401).send('Unauthorized user!');
}
});

const port = 8080

app.listen(port, () => console.log(`This app is listening on port ${port}`));
