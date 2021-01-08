const chalk = require('chalk');
console.log(chalk.yellow('Hi!'));

/* IN ONE FILE */
const original_sum = (numA, numB) => numA + numB;
/* This line EXPOSES the function */
module.exports = original_sum;
console.log(chalk.red("The Original Sum is " + original_sum(1,9)));

/* CALLING FUNCTION FROM ANOTHER MODULE -- "./" is mandatory */
const tutorial = require ('./tutorial');
console.log(chalk.green('The tutorial sum is ' + tutorial.sum(1,5)));
console.log(chalk.blue(tutorial.PI));
console.log(chalk.inverse(new tutorial.SomeMathObject()));
/*
console.log(tutorial);
*/

/*
THE REASON THIS DIDN'T WORK IS BECAUSE THIS FUNCTION WASN'T EXPOSED!

function myFunction() {
    var d = new Date();
    var weekday = new Array(7); 
    weekday[0] = "Sunday";      
    weekday[1] = "Monday";      
    weekday[2] = "Tuesday";     
    weekday[3] = "Wednesday";   
    weekday[4] = "Thursday";    
    weekday[5] = "Friday";      
    weekday[6] = "Saturday";    

    return weekday[d.getUTCDay()];
}
console.log('Today is ' + myFunction);

*/
