/* Now we're going to work with the HTTP Get requests
   and talk about QUERY STRINGS and ROUTE PARAMETERS 
*/

const express = require('express');
const app = express();

/* As an example, we'll show the current time as well*/
let date_obj = new Date();
// current hours
let hours = date_obj.getHours();
// current minutes
let minutes = date_obj.getMinutes();
// current seconds
let seconds = date_obj.getSeconds();

app.get('/', (req,res) => {
    res.send('Hello World');
});

/* ROUTE PARAMETERS */
/* This time around, let's change the ROUTE argument. */
app.get('/example', (req,res) => {
    res.send('Hit Example Route');
});

/* Now, let's add another route */
app.get('/example/:name/:age', (req,res) => {
    
    /* What we want to do is get the values of name and age */
    console.log(req.params);

    //Another type of data you can send back are query-string parameters
    console.log(req.query);
    // Running the above should show you an empty object in the terminal.
    // Our query string is empty because we haven't passed in anything yet.

    // When you run the app on Chrome, follow it up with '?tutorial=paramsTutorial'
    // Now our query string returns {tutorial: paramsTutorial}

    /* Now we make the data passed in, show up on the page*/
    res.send(`Hitting Example Route with params <br/> Name:${req.params.name} <br/> Age:${req.params.age} <br/> Time of execution: ${hours}:${minutes}:${seconds}`);
});

app.listen(3000);

