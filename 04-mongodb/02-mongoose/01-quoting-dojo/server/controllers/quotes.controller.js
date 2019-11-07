const Quote = require('../models/quote.controller.js')
module.exports = {
    index: function(req, res) {
        res.render('index');
    },
    create: function(req, res) {
        Quote.create(req.body, function(err) {
            if (err) { console.log(err); }
            res.redirect('/quotes');
          });
    },
    quotes_page: function(req, res) {
        Quote.find({}, function(err, quotes) {
            if (err) { console.log(err); }
            res.render('quotes', { quotes: quotes });
          });
    }
};
