/* In this lesson, we're going to be talking 
   about validating user input, using JOI.
   The reason you would validate user input 
   on the server, is because you can never 
   trust the data you're receiving from the 
   user.
*/


const path = require ('path');
const express = require ('express');
const bodyParser = require ('body-parser');
const Joi = require('joi');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req,res) => {                                         // <-- The GET Request serves the form to the user
    res.sendFile(path.join(__dirname, 'static', 'newIndex.html'));  

    /* What we want to do is validate the data  that we get within 
       our Request body. To do that, we're going to create a 
       schema - a blueprint or set of rules we wnat our data to 
       have. 
    */

    app.post('/', (req,res) => {                                    // <-- The POST Request gets the data from the user
        
        console.log(req.body);
        const schema = Joi.object().keys({
            
        /* Keys is going to work the way a regular JavaScript file 
           would work with key-value pairs. 
           In here, we set the rules that the data must follow
        */
            email: Joi.string().trim().email().required(),
            password: Joi.string().min(5).max(9).required()
        });

        /* Now that we have our schema, let's actually use it.
           Call the 'validate()' method, which takes 3 arguments:
           1. form data 
           2. the schema/blueprint
           3. callback function, with result
        */
       Joi.validate(req.body, schema, (err,result) => {
            if(err) {
                console.log(err);
                res.send('An Error Has Occurred');
            } else {
                console.log(result);  
                res.send('Success: Data Posted'); 
            }
       });
    });
});

app.listen(3000);