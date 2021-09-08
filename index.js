import express from 'express';
const app = express();

app.get('/', function(req, res) {

    res.send('<h3>Hello Node on Heroku</h3><a href="https://github.com/jlwamba/Hello-heroku" target="_blank">See the code!</a>');
    res.sendFile('/index.js', { root: __dirname });


});

app.get('/about', function(req, res) {

    res.sendFile('/README.md', { root: __dirname });

});

app.listen(process.env.PORT || 3000);