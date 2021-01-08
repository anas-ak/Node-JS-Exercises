/* In this lesson, we're going to talk about EJS
   EJS is a template language that allows us to 
   write more dynamic webpages.

   So, we have a index.html - a static HTML file in 
   our 'static' folder,  with dummy data. 
   We want to use this HTML file as a template that 
   we can use for serving dynamic data.

   In the terminal, run 'npm install ejs'
*/

const express = require ('express');
const path = require ('path');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));

/*  Here we can set the view of our Express application. 
    Create a folder called 'views', which will store our 
    EJS template.
    Express automatically knows that our templates are 
    loaded in the views folder, because that's the 
    default folder.
*/
app.set('view engine', 'ejs');

/* app.set() takes in 2 arguments:
   1. The view engine and 
   2. The template you want to use.
*/

/* Now let's send data to our EJS file.
   Modify the app.get 
*/

// app.get('/', (req,res) => { 

   app.get('/:userQuery', (req,res) => {
    
    // res.sendFile(path.join(__dirname, 'static', 'index.html'));
    
    /* Now we render the template to the user.
       Replace the res.sendFile with..
     */

     // res.render('index');

     res.render('index', {data: {userQuery: req.params.userQuery, 
                                 searchResults: ['book1', 'book2', 'book3'],
                                 userName: 'anas', 
                                 loggedIn: true
                                 }});

     /* When we render the ejs file, what's happening is that 
        the server is looking at the ejs file for ejs code, 
        executes it and sends back to the client an HTML file.
     */
});

app.listen(3000);

