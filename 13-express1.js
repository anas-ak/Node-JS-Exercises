/* We're going to set up our first Express Server
   Express is a web framework for Node JS.
   We used modules http and fs to serve static files.
   With Express, we can accomplish that and much more
   with much less code.

   TERMINAL: npm install express
   We have now installed Express.
*/

const express = require ('express');

/* require ('express') returns a function.
   This function returns an object, with a bunch of methods
   which we can use within our app.
*/
const app = express();

/* As an example, we'll show the current time as well*/
let date_obj = new Date();
// current hours
let hours = date_obj.getHours();
// current minutes
let minutes = date_obj.getMinutes();
// current seconds
let seconds = date_obj.getSeconds();

/* We call a method called get(), which takes 2 arguments:
   1. Route ('/')
   2. Callback function (req,res)
*/
app.get('/', (req,res) => {
    res.send(`Hello World from Node JS.' <br/> Time of Execution: ${hours}:${minutes}:${seconds}`);
});

// Finally give the app a port to listen to
app.listen(3000);