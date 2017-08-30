'use strict';
var logo = require('./logo');
/*
 * App config for production.
 */
module.exports = {
  environment: 'production',
  consoleMessage: logo,
   urlPost : 'https://tranquil-lowlands-85919.herokuapp.com/women',
 urlGetFalse : 'https://tranquil-lowlands-85919.herokuapp.com/women?public=false',
 urlGetTrue : 'https://tranquil-lowlands-85919.herokuapp.com/women?public=true',
 urlUser : 'https://tranquil-lowlands-85919.herokuapp.com/users'
};
