const utils = require('./utils')

it('should add two numbers', () => {
    var res = utils.add(11, 12);
    if (res !== 23) {
        throw new Error(`Expected 23 but got ${res}`);
    }
});

it('should square a number', () => {
    var res = utils.square(3);
    if(res !== 9){
        throw new Error(`Expected 9 but got ${res}`);
    }
});

