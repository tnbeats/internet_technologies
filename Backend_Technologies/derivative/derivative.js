const m = require('mathjs');

d = m.derivative('x^2 * exp(x) * sin(x)', 'x');
console.log(d.toString());