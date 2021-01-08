const fs = require ('fs');

/* CREATE A FOLDER called tutorial
    Takes new folder name and callback functions as arguments
*/

// fs.mkdir('tutorial', (err) => {
//     if(err) {
//         console.log('We Have A Mkdir Problem');
//     } else {
//         console.log('Folder Successfully Created');

//         /* Create a file inside called 'example.txt' */
//         fs.writeFile('./tutorial/example.txt', "This Data Will Be Deleted", (err) => {
//             if(err) {
//                 console.log('We Have A WriteFile Problem');
//             } else {
//                 console.log('File Successfully Created');
//                 fs.readFile('./tutorial/example.txt', 'utf-8', (err, file) => {
//                     if(err) {
//                         console.log('We Have A READFILE Problem');
//                     } else {
//                         console.log(file);
//                         /* DELETE THE FILE FIRST */
//                         fs.unlink('./tutorial/example.txt', (err) => {
//                             if(err) {
//                                 console.log('We Have A UNLINK Problem');
//                             }
//                             else {
//                                 console.log('File Successfully Deleted');
//                                 fs.rmdir('tutorial', (err) => {
//                                     if(err){ 
//                                         console.log('We Have A Rmdir Problem');
//                                     } else {
                                        
//                                         console.log('Folder Successfully Deleted');
//                                     }
//                                 });
//                             }
//                         }); 
//                     }
//                 });
//             }
//         });
//     }
// });

/* DElETE A DIRECTORY 
    .rmdir works ONLY IF THE DIRECTORY IS EMPTY
*/

// fs.rmdir('tutorial', (err) => {
//     if(err){ 
//         console.log('We Have A Rmdir Problem');
//     } else {
//         /* DELETE THE FILE FIRST */
//         fs.unlink('./tutorial/example.txt', (err) => {
//             if(err) {
//                 console.log('We Have A UNLINK Problem');
//             }
//             else {
//                 console.log('File Successfully Deleted');
//             }
//         });
//         console.log('Folder Successfully Deleted');
//     }
// }); 

/* DELETE A DIRECTORY WITH MULTIPLE FILES 
   For this we'll use a for loop

   We're provided a directory called 'manyFiles' and 3 files within
   Use fs.readdir to create an array of the files
   Arguments: 
   1. Name of directory
   2. Callback function - 2 parameters: (a) Error (b) files
*/
fs.readdir('manyFiles', (err, files) => {
    if(err) {
        console.log('We Have A ReadDir Problem');
    } else {
        for(let file of files) {
            fs.unlink('./manyFiles/' + file, (err) => {
                if(err) {
                    console.log('We Have An Unlink Problem');
                } else {
                    console.log('File Deleted');
                }
            });
        }
        fs.rmdir('manyFiles', (err) => {
            if(err){
                console.log('We Have A RmDir Problem');
            } else {
                console.log('Directory Successfully Deleted');
            }
        });
    }
});




