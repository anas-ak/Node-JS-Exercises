/* In this lesson, we're going to serve static files using Express
   This is similar to Lesson 11, where we accessed a folder called 'static'
*/

const express = require('express');

/* The Path Module provides a way of working with directories and file paths.*/
const path = require ('path');

const app = express();

app.get('/', (req,res) => {
    res.send('Hello World');
});

app.get('/example', (req,res) => {
    res.sendFile(path.join(__dirname, 'static/tester', 'loadpage.html'));
});

app.listen('3000');

app.use('/public', express.static(path.join(__dirname, 'static/tester')));
/* /public =        alias for the static folder. To the client, this is the name being used
   expres.static =  built-in middleware function to serve static files
   path.join =      joins the specified paths into one
   __dirname =      returns the directory of the js file is calling
*/