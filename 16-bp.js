/*  HTTP POST Request with Express and Body Parser Module */

/* We have a basic form in html called newIndex.html
   We want to enter information in the form and render it in our terminal. 
*/
const path = require ('path');
const express = require ('express');
const app = express();

/* To remedy this situation, install the body-parser module.
   The Body Parser Module parses form data for us.
*/
const bodyParser = require('body-parser');

app.use('/public', express.static(path.join(__dirname, 'static')));

// Now we use middleware.

app.use(bodyParser.urlencoded({extended: false}));

/* Returns middleware that only parses urlencoded bodies and only 
   looks at requests where the Content-Type header matches the type option.

   The extended option allows to choose between parsing the URL-encoded data
   with the querystring library (when false) or the qs library (when true). 
   The “extended” syntax allows for rich objects and arrays to be encoded into 
   the URL-encoded format, allowing for a JSON-like experience with URL-encoded.

   The above code allows us to parse an url-encoded form.
   It parses the data for use and attaches it to the request.
   The extended option is set to false because we're not 
   dealing with any complicated optics.
   All we want are email and password strings.
*/

/* What is middleware?
   Middleware functions are functions that have access to the request object (req), 
   the response object (res), and the next middleware function in the 
   application’s request-response cycle.
*/

app.get('/', (req,res) => {                                          // <-- The GET Request serves the form to the user
    res.sendFile(path.join(__dirname, 'static', 'newIndex.html'));
});

app.post('/', (req,res) => {                                         // <-- The POST request gets the data from the user
   console.log(req.body);
   //database work here
   res.send('Success');
});

app.listen(3001);