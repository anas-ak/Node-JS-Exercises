//require fs
const fs = require ('fs');

//create a file
// fs.writeFile('example.txt', 'Time Right Now - 8:42PM. Have fun learning Node JS.', (err) => {
//     if(err) {
//         console.log('WriteFile Error');
//     } else {
//         console.log('File Successfully Created');
//     }
// });

//create a readstream
// const readStream = fs.createReadStream('./example.txt', 'utf8');
const readStream = fs.createReadStream('./sample.txt', 'utf8');

//create a write stream that creates and puts data into a file
// const writeStream = fs.createWriteStream('./example2.txt');
const writeStream = fs.createWriteStream('./sample2.txt');

// The readstream object inherits from the EventEmitter class.
// One event we want to listen for is the 'data' event.

// Declare a listener that will listen for events to occur.
readStream.on('data', (chunk) => {
    // console.log(chunk);
    // When data is being read in chunks, we'll start writing those chunks simultaneously
    writeStream.write(chunk);
    console.log('Success!');
});


