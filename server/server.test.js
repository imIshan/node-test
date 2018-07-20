const request = require('supertest');
const expect = require('expect');

let app = require('./server').app;

describe('express-server', () => {
    describe('GET', () => {
        it('should return api reponse', (done) => {
            request(app)
                .get('/get')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found.'
                    });
                })
                .end(done);
        });
    });
    describe('GET /users', () => {
        it('should return user object', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'chai',
                        age: 4
                    });
                })
                .end(done)
        });
    });
});


