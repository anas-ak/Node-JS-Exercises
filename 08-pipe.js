/* Pipes allow us to take a source stream (a readable stream) and sent it to its destination (a writable stream) */

/* Create a file-system module */
const fs = require ('fs');

/* Create a readstream */
const readStream = fs.createReadStream('./large_sample.txt','utf8');

/* Create a writestream */
const writeStream = fs.createWriteStream('./result.txt');

/* Attach an event listener to the readStream and everytime we get 
   a data event emitted, read a chunk, and write it to the 
   writeStream */

// readStream.on('data', (chunk) => {
//         writeStream.write(chunk);
// });

/* There's a simpler way of doing this. 
   Instead of the last bit of code, write ...
*/

readStream.pipe(writeStream);

/* A Pipe is a short-hand way of sending data between streams: source => destination */

