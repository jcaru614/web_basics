const ProductController = require('../controllers/product.controller')

//CRUD
module.exports = (app) => {
    app.post('/api/v1/create',ProductController.create);
    app.get('/api/v1/readAll',ProductController.readAll);
    app.get('/api/v1/readOne/:id',ProductController.readOne);
    app.put('/api/v1/updatedOne/:id',ProductController.updatedOne);
    app.delete('/api/v1/deleteOne/:id',ProductController.deleteOne);
}
