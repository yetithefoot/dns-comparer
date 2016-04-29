var dns = require('dns');
var intersect = require('intersect');


var resolve = function(domain, done){
	return dns.resolve(domain, function (err, ips) {
		if (err) {
			err.message = 'Can not populate DNS record for ' + domain;
			err.code = 'norecord'
			return done && done(err);
		}

		if(!ips || !ips.length) {
			err.message = 'There is no ip addresses populated for domain '+ domain; 
			err.code = 'norecord'
			return done && done(err);
		}
		done && done(null, ips);
	});
}

/**
 * Checks that two domains points to the same ip
 * @param  {String}   domain1 - Domain name
 * @param  {String}   domain2 - Domain name
 * @param  {Function} done - Callback
 */
exports.compare = function(domain1, domain2, done) {
	// get ip addresses for passed domains and find arrays intersect
	resolve(domain1, function(err1, ips1){
		resolve(domain2, function(err2, ips2){
			if(err1) return done(err1);
			if(err2) return done(err2);

			// ensure that at least one of addresses points to
			var intersection = intersect(ips1, ips2);

			return done && done(null, {
				intersected: !!intersection.length,
				exact: (intersection.length === ips1.length) && (ips1.length === ips2.length),
				domain1: domain1,
				domain2: domain2,
				ips1: ips1,
				ips2: ips2,
				intersection: intersection
			});
		});
	});
}
