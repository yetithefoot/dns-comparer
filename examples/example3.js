var compare = require('../index').compare;

compare('google.com', 'google.com', function(err, result){
	err && console.error(err);
	console.log(result);
	// { intersected: true,
	// exact: true,
	// domain1: 'google.com',
	// domain2: 'google.com',
	// ips1:
	//  [ '173.194.122.199',
	//    '173.194.122.195',
	//    '173.194.122.198'],
	// ips2: [ '173.194.122.199' ],
	// intersection: [ '173.194.122.199' ] }
});




