const quotesController = require('../controllers/quotes.controller.js')
module.exports = function(app){
    app.get('/',  quotesController.index),
    app.post('/quotes', quotesController.create),
    app.get('/quotes', quotesController.quotes_page)
};