var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/servicio4', function(req, res, next) {
  res.send("hola desde servicio_4");
});


module.exports = router;
