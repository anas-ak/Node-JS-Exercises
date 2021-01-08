/* Middleware is the code that gets executed between 
   the user request and the server itself. 
*/

const express = require ('express');
const bodyParser = require ('body-parser');
const app = express();

/* This function is a middleware function.
   When a user makes a request, this function 
   will take the user's request and process it.
*/
app.use(bodyParser.json());

/* In this case, the bodyParser.json() function 
   checks to see if the user sent any json data, 
   processes it and attaches it to the request.body,
   then calls a function called 'next()', to let the 
   server know that it's finished processing this 
   request and is waiting for another.
*/

app.use('/banana', (req,res,next) => {
    console.log('url: ' + req.url + ', Method: ' +  req.method);

    // This is how you modify the request and response objects.
    req.fruit = 'banana';

    /*  The next() method MUST BE invoked when you
        build your custom middleware. It's responsible
        for letting Express know that we're finished 
        processing this request.
    */
    next();
    /* If you don't call the next() method, you'll 
       time out the server because it has no idea whether 
       you're done processing the request or not.
    */

});

app.get('/banana', (req,res) => {
    console.log(req.fruit);
    res.send('Middleware Utilised');
});

app.listen(3000);
