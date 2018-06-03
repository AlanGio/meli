var express = require('express');
var request = require('../request');

module.exports = function(req, res, next) {

	var uri = '/sites/MLA/search?q='+req.query.search+'&limit=4';
	var safeQuery = encodeURI(uri); 

	var options = {
	  host: 'api.mercadolibre.com',
	  path: safeQuery,
	};

	request(options, function(data) {
		res.render('list', { title: 'Listados - MercadoLibre', search: req.query.search, results: data.results});
	});

}