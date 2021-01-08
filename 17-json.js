/* In the previous lesson, we discussed using 
   the Body Parser (body-parser) module to 
   handle url-encoded data. 
   
   Now what we're going to do is take the form
   from the last tutorial and convert it to 
   post JSON data (to our server).

   The newIndex file -> form element will now 
   have an id="form" and the jQuery CDN.

   We want to prevent default submission.
   We want to post data using jQuery AJAX.
*/
const path = require ('path');
const express = require ('express');
const bodyParser = require('body-parser');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({extended: false}));

/* body-parser has a method called .json() 
   This function is going to parse JSON and 
   attach it to our body.
*/
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'static', 'newform.html'));
});

app.post('/', (req,res) => {
    console.log(req.body);
    //database work here
    res.json({success: true});        // <--- Instead of plain text, we're going to respond to the client using JSON
});

app.listen(3001);