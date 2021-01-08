const EventEmitter = require ('events');
const eventEmitter = new EventEmitter();

/* PART 1 */
eventEmitter.on('tutorial', () => {
    console.log('tutorial event has occurred');
});

eventEmitter.emit('tutorial');

/* PART 2 */
eventEmitter.on('sum', (num1, num2) => {
    console.log('Sum = ' + (num1+num2));
});

eventEmitter.emit('sum', 1, 2);

/* PART 3 */

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

let anas = new Person('Anas');
let laura = new Person('Laura');

anas.on('name', () => {
    console.log('My name is ' + anas.name);
});

laura.on('name', () => {
    console.log('My name is ' + laura.name)
});

anas.emit('name');
laura.emit('name');