/* Create a web server using the HTTP module */

const http = require ('http');


/* As an example, we'll show the current time as well*/
let date_obj = new Date();
// current hours
let hours = date_obj.getHours();
// current minutes
let minutes = date_obj.getMinutes();
// current seconds
let seconds = date_obj.getSeconds();

/* Call a method called createServer() in a variable called server
   This method takes a callback function which gives us 2 objects:
   
   1. req - A Request Object: What the client requests from us
   2. res - A Response Object: The server takes the request and 
            sends back a response
*/
const server = http.createServer((req, res) => {
/* Now, from here we can listen to requests from different routes.
   Let's look at a property of the request object - url

   Code the callback function so that our page says 
   'Hello World' if it's the ROOT DOMAIN.
   Otherwise, say 'Using Some Other Domain'
*/
    if(req.url === '/') {
        res.write(`Hello World From Node JS.\nI was written by Anas at ${hours}:${minutes}:${seconds}`);
    } else {
        res.write('You Are Using Some Other Domain');
    }
	res.end(); 	//res.end() sends the response.
});

/* Lastly, tell Node JS what port to listen to*/
server.listen(3000);
console.log('Success');

////////////////////////////////////////////////
