/* 
    TERMINAL: npm install lodash
    We have installed a module called lodash.
    The package.json file has been updated, with new dependencies.
    A new folder called node_modules has been created.
    This new directory contains a sub-folder called lodash
*/

const t = require ('lodash');

/* .fill() takes 4 arguments:
    1. An array
    2. What you're going to fill the array with
    3. Starting index
    4. End Index 
*/
const example = t.fill([1,2,3,4,5], 'banana', 1, 4);

console.log(example);

/* 
    TERMINAL: npm uninstall lodash
    We have now uninstalled lodash
*/