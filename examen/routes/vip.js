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

		var optionsCategory = {
		  host: 'api.mercadolibre.com',
		  path: '/categories/'+data.category_id
		};

		request(optionsDescription, function(dataDesc) {

			request(optionsCategory, function(dataCat) {

				res.render('vip', { title: 'VIP - MercadoLibre', item: data, itemDescription: dataDesc, itemCategory: dataCat});
			});
		});

	});


}