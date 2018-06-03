var express = require('express');
var request = require('../request');


module.exports = function(req, res, next) {


	var options = {
	  host: 'api.mercadolibre.com',
	  path: '/items/'+req.params.id
	};

	var optionsDescription = {
	  host: 'api.mercadolibre.com',
	  path: '/items/'+req.params.id+'/description'
	};

	request(options, function(data) {

		request(optionsDescription, function(dataDesc) {
			res.render('vip', { title: 'VIP - MercadoLibre', item: data, itemDescription: dataDesc});
		});

	});


}