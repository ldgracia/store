var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/servicio2', function(req, res, next) {
  res.send("hola desde servicio13");
});


module.exports = router;