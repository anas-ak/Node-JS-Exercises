/*  The Express Router allows us to separate 
    our routes into different files. This makes 
    our code a lot more manageable, as opposed to 
    sticking ALL OF OUR routes in app.js

*/

const express = require ('express');
const route = express.Router();

// What happens if you want to use Middleware? 
route.use((req,res,next) => {

    /* The middleware is specified to run with 
       our people route. All requests will 
       go through the middleware, whenever 
       route.use is invoked.
    */
    console.log('Middleware Utilised');
    next();
});

route.get('/', (req,res) => {
    res.send('/ Being Hit');
});

route.get('/example', (req,res) => {
    res.send('/example Being Hit');
});



// THE IMPORTANT BIT 
module.exports = route;
