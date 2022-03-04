var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/servicio1', function(req, res, next) {
  res.send("hola desde servicio 9 u.u");
});


module.exports = router;
