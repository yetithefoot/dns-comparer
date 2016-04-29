Checks that two domains point to the same ip. 

Problem
---
If you need to check if two domain names points to the same ip, this module is for that.

Usage
---

```javascript
var compare = require('dns-comparer').compare;

// can check two domains
compare('google.com', 'dns.google.com', function(err, result){
    err && console.error(err);
    console.log(result);
    // output will be
    // { intersected: false,
    //   exact: false,
    //   domain1: 'google.com',
    //   domain2: 'dns.google.com',
    //   ips1: ['213.59.210.88','213.59.210.89','213.59.210.84'],
    //   ips2: ['173.194.32.160','173.194.32.169','173.194.32.174'],
    //   intersection: [] 
    // }
});

// can check also ips
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
```

Callback
---
Callback returns `error` as a first param with if something went wrong (ex. no DNS record for domain found).
Callback returns `result` object as a second param if comparing was done:
```javascript
{
    intersected: Boolean, // indicates if domains points to common ips
    exact: Boolean, // if domains point to exactly the same ip or ips
    domain1: String, // first domain name to check
    domain2: String, // second domain name to check
    ips1: Array, // ips for first domain
    ips2: Array, // ips for second domain
    intersection: Array // common ips for first and second domains
}
}
```

