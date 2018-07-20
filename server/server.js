const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: "Todo App v1.0"
    });
});

app.get('/users', (req, res) => {
    res.send([{
        name: 'test',
        age: 10
    }, {
        name: 'mocha',
        age: 2
    }, {
        name: 'chai',
        age: 4
    }]);
});

if(!module.parent) {
    app.listen(4000);
 }

module.exports.app = app;