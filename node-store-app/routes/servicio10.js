var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/servicio10', function(req, res, next) {
  res.send("hola desde el servicio 10 creado por Oskar");
});


module.exports = router;
