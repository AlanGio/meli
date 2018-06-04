var express = require('express');
var request = require('../request');
var numeral = require('numeral');

numeral.register('locale', 'ars', {
  delimiters: {
      thousands: '.',
      decimal: ','
  },
  currency: {
      symbol: '$'
  }
});
numeral.locale('ars');

module.exports = function(req, res, next) {

	var uri = '/sites/MLA/search?q='+req.query.search+'&limit=4';
	var safeQuery = encodeURI(uri); 

	var options = {
	  host: 'api.mercadolibre.com',
	  path: safeQuery,
	};

	request(options, function(data) {

		for(var i = 0; i < data.results.length; i++) {
			data.results[i].price = numeral(data.results[i].price).format('$0,0[.]00');
		}

		res.render('list', { title: 'Listados - MercadoLibre', search: req.query.search, results: data.results});
	});

}