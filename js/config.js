const Twit = require('twit')

const T = new Twit({
  consumer_key:         'qFPjMKzVqoONAtl44QUykztQF',
  consumer_secret:      '9uaNDYCrHoYbY4496uYaS44s7X2A0RoEk6N7BNxk6Z3w0K6PIz',
  access_token:         '16975229-zoFbiWvczI9nxlZ4Ly1d83KXrkBs7WDWQUxQ1GUBs',
  access_token_secret:  'kUOP9Q9Yr6i7r4WQTZUNM06vnusMrYgihZ6agHC5bIBR7',
});

module.exports.keys = T;
