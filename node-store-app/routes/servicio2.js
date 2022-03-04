var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/servicio2', function(req, res, next) {
  res.send("hola desde servicio2 soy Marco");
});


module.exports = router;
