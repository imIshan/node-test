const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
    let res = utils.add(11, 12);
    expect(res).toBe(23).toBeA('number');
});

it('should square a number', () => {
    let res = utils.square(3);
    expect(res).toBe(9).toBeA('number');
});

it('should set first name and last name', () => {
   let user = {};
   let res = utils.setName(user, 'test user');
    expect(res).toInclude({
        firstName: 'test',
        lastName: 'user'
    })
});

