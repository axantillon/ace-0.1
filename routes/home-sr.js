var express = require('express');
var router = express.Router();

var models = ['imagenet', 'resnet', 'kdjhfkdj', 'cabron', 'jfhdjfhj'];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'ace - Home', models: models});
});

router.get('/model', function(req, res, next){
  model_id = req.query.model;
  res.render('model', {name: model_id, model: model_id})
});

router.post('/input-file', function(req, res, next){
  res.redirect('/home/model/prediction?model=' + model_id)
});

router.get('/model/prediction', function(req, res, next){
  name = req.query.model
  res.render('prediction', {name:name, prediction: "it worked"})
});

module.exports = router;
