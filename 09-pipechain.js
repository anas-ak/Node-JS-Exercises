/* Now for something a bit more complicated */

/* Create a file-system module */
const fs = require ('fs');

/* Bring in another module - zlib
   zlib is a module used for COMPRESSING files
*/
const zlib = require ('zlib');

/* Create a readstream */
const readStream = fs.createReadStream('./large_sample.txt','utf8');

/* Create a writestream. Make sure the output is .gz file*/
const writeStream = fs.createWriteStream('./result.gz');

/* Now create a TRANSFORM STREAM. 
A transform stream takes the input from the readStream and 
manipulates that data into something else.
*/
const gzip = zlib.createGzip();

/* Now, instead of the pipe between the readStream and the writeStream,
we can send that data and pipe it into our gzip
*/

readStream.pipe(gzip).pipe(writeStream);

/*The gzip is going to take the data, compress it and then pipe it
to our writeStream*/

//////////////////////////////////////////////////////////////////

/* UNCOMPRESSION */

/* Instead of gzip, we declare a variable called gunzip that creates Gunzip */
const gunzip = zlib.createGunzip();

/* Create a readstream */
const readStream = fs.createReadStream('./result.gz');

/* Create a writestream. Make sure the output is .gz file*/
const writeStream = fs.createWriteStream('./uncompressed_result.txt');

readStream.pipe(gunzip).pipe(writeStream);

/* Get rid of the encoding type in the readStream. 
   Make sure your final product is a text file.
*/