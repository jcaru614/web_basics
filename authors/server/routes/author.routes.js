const controller = require('../controllers/author.controller');
module.exports = (app) => {
    app.delete('/api/v1/deleteOne/:id', controller.deleteOne);
    app.post('/api/v1/create', controller.create);
    app.get('/api/v1/readAll', controller.readAll);
    app.get('/api/v1/readOne/:id', controller.readOne);
    app.put('/api/v1/updateOne/:id', controller.updateOne);
}