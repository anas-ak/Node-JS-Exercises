const sum = (num1, num2) => num1 + num2;

const PI = 3.142;

class SomeMathObject {
    constructor () {
        console.log('Object Created');
    }
}

/* EXPOSE THESE PROPERTIES TO THE OUTSIDE WORLD

module.exports.sum = sum;
module.exports.PI = PI;
module.exports.SomeMathObject = SomeMathObject;

*/

/* ALTERNATIVE TO EXPOSING EACH PROPERTY SEPARATELY*/

    module.exports = {sum: sum, PI: PI, SomeMathObject: SomeMathObject}
/*
*/
