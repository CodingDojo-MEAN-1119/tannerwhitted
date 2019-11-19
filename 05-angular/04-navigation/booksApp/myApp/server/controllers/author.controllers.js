const Author = require('mongoose').model('Author');
const errorHandler = require('./concerns/error-handler');

module.exports = {
  index(request, response) {
    Author.find(request.body)
      .then(author => response.json(author))
      .catch(errorHandler.bind(response));
  },
  show(request, response) {
    console.log("thing", request.params);
    Author.findById(request.params.id)
      .then(Author => response.json(Author))
      .catch(errorHandler.bind(response));
  },
  create(request, response) {
    const thisAuthor = new Author();
    thisAuthor.name = request.body.name;
    thisAuthor.quote = request.body.quote;
    thisAuthor.save()
      .then(author => response.json(author))
      .catch(errorHandler.bind(response));
  },
  update(request, response) {
    Author.findByIdAndUpdate(request.params.id, request.body, { new: true })
      .then(author => response.json(author))
      .catch(errorHandler.bind(response));
  },
  destroy(request, response) {
    Author.findByIdAndRemove(request.params.id)
      .then(result => response.json(result))
      .catch(errorHandler.bind(response));
  },
}
