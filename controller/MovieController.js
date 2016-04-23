var restful = require('node-restful');

module.exports = (app, route) => {
  
  var rest = restful.model(
      'movie',
      app.models.movie
  ).methods(['get','put','post','delete']);
  
  rest.register(app,route);
  
  return (req,res,next) => {
      next();
  };
};