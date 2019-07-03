var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/retimage', function(req, res, next) {
  console.log("aaaa");

  let data="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA4ElEQVQ4jZWSXXUEIQyFkTASKmEl9HHIl4dIqISRsE5GwkqoBCQgAQn0BbaUzQ6nOYcXwv1JLiFMZWZbjNFU9TH3liUiNyADFTj+BQYOoDRwevdu3/cP93IAV+D0wKr6CRRP/RzArn0gjSIich/V64qgqfd+fo4yNSpQvQTagktb8u8YbXmzg5c5zWwTkVsIIcQYbWS+OwT1z6OrijGaRwAUM9uWBGa2vSGoQHJzn0tVHxckVUS+POGnw+YiX5H0+JpYAnJfanfxEufFKZ6rnnVagZcJtb9xDmQZ+AaOOZkffFzm4d1nzFkAAAAASUVORK5CYII=";

  res.end(new Buffer(data,'base64'));
});

module.exports = router;
