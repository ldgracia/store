var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/servicio3', function(req, res, next) {
  res.send("hola desde servicio3:)");
});


module.exports = router;
