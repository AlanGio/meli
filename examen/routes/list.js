var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('list', { title: 'Listados - MercadoLibre' });
});

module.exports = router;