var compare = require('../index').compare;

compare('google.com', 'dns.google.com', function(err, result){
	err && console.error(err);
	// got records
	console.log(result);
	// { intersected: false,
	// 	 exact: false,
	//   domain1: 'google.com',
	//   domain2: 'dns.google.com',
	//   ips1:
	//    [ '213.59.210.88',
	// 	 '213.59.210.89',
	// 	 '213.59.210.84'],
	//   ips2:
	//    [ '173.194.32.160',
	// 	 '173.194.32.169',
	// 	 '173.194.32.174'],
	//   intersection: [] }
});




