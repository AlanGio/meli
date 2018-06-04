var express = require('express');
var request = require('../request');
var numeral = require('numeral');

numeral.locale('ars');

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

				data.price = numeral(data.price).format('$0,0[.]00');
				res.render('vip', { title: 'VIP - MercadoLibre', item: data, itemDescription: dataDesc, itemCategory: dataCat});
			});
		});

	});


}