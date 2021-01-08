const fs = require ('fs');

/* CREATE A FILE
    Use fs.writeFile to create a text file called 'example.txt' with "a b c d e"
    .writeFile takes 3 arguments: 
    1. Name of the file
    2. Data that goes in the file
    3. Callback function. Error as parameter
*/

fs.writeFile('example.txt', 'Aa Bb Cc Dd Ee', (err) => {
    if(err) {
        console.log('We Have A FIRST WRITE Problem');
    }
    else {
        fs.readFile('example.txt', 'utf-8', (err,file) => {
            if(err) {
                console.log('We Have A 1ST READ FILE Problem');
            } else {
                console.log(file);
            }
        });

        fs.unlink('example.txt', (err) => {
            if(err) {
                console.log('We Have AN UNLINK Problem');
            } else {
                console.log('File Successfully Deleted');
                fs.writeFile('example2.txt', 'FF Gg Hh Ii Jj', (err) => {
                    if(err) {
                        console.log('We Have A 2ND WRITE FILE Problem');
                    }
                    else {
                        console.log('New File Successfully Created');
                        fs.readFile('example2.txt', 'utf-8', (err,file) => {
                            if(err) {
                                console.log('We Have A 2ND READ FILE Problem');
                            } else {
                                console.log(file);
                            }
                        });
                    }
                });
            }
        });
    }
});

/* READ A FILE
   Use fs.readFile to read the contents of the text file 'example.txt'
   .readFile takes 4 arguments:
   1. Name of the file
   2. Encoding Type
   3. Callback function
   4. The file itself
*/

// fs.readFile('example.txt', 'utf-8', (err,file) => {
//     if(err) {
//         console.log('We Have A Problem');
//     } else {
//         console.log(file);
//     }
// });

/* RENAME THE FILE
   Use fs.rename() to rename the file 'example.txt' to 'example2.txt'
   .rename takes 3 arguments:
   1. The original name of the file
   2. The new name of the file
   3. Callback function
*/

// fs.rename('example.txt', 'example2.txt', (err)=> {
//     if(err) {
//         console.log('We Have A Problem');
//     } else {
//         console.log('File Successfully Renamed');
//     }
// });


/* APPEND DATA TO THE FILE
   Use fs.appendFile to add 'Ff Gg Hh Ii Jj' to 'example2.txt'
   .appendFile takes 3 arguments:
   1. The name of the file
   2. The data that's being added
   3. Callback function
*/

// fs.appendFile('example.txt', 'Ff Gg Hh Ii Jj', (err) => {
//     if(err)
//         console.log('We Have A Problem');
//     else
//         console.log('Data Appended To File');
// });

/* DELETE A FILE
   Use fs.unlink to delete a file.
   .unlink takes 2 arguments:
   1. The name of the file
   2. Callback function. Error as parameter.
*/
fs.unlink('example.txt', (err) => {
    if(err) {
        console.log('We Have AN UNLINK Problem');
    } else {
        console.log('File Successfully Deleted');
    }
});