var compare = require('../index').compare;

compare('google.com', '173.194.122.199', function(err, result){
	err && console.error(err);
	console.log(result);
	// { intersected: true,
	// exact: false,
	// domain1: 'google.com',
	// domain2: '173.194.122.199',
	// ips1:
	//  [ '173.194.122.199',
	//    '173.194.122.195',
	//    '173.194.122.198'],
	// ips2: [ '173.194.122.199' ],
	// intersection: [ '173.194.122.199' ] }
});




