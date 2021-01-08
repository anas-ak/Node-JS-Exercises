/* In this lesson, we're going to go over 
   how we can serve static files using 
   the http and file-system modules. */

const fs = require ('fs');
const http = require ('http');

/* There is a folder called 'static'.
   It contains a webpage, a json file 
   and a PNG file. What we need to do is
    1. Send a request to the server
    2. Have the server respond with the file 
  */

const server = http.createServer((req,res) => {

    /* Pass in the file you want to be read*/
    const readStream = fs.createReadStream('./static/loadpage.html');

    /* Header for the response - by http module
       Sends a response header to the request. 
       The status code is a 3-digit HTTP status code, like 
	   404 - Not Found.
       200 - Successfully Completed

       Based on the file, the Content-Type changes:
       a. html = 'text/html'
       b. json = 'application/json'
       c. image = 'image/png'
    */
    res.writeHead(200, { 'Content-Type' : 'text/html'});

    /* Since res is a pipable stream,
       pipe the readStream to the user. 
    */

    readStream.pipe(res);
}).listen(3000);
/* Don't need server.listen. We're calling the listen method 
   on the createServer object and pointing it at port 3000.
*/

