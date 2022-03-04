var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/servicio5', function(req, res, next) {
  res.send("hola desde servicio5 por Luis Angel");
});


module.exports = router;
