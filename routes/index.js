var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/contacts', function (req, res) {
    console.log(req.body);
    res.status(201).json( {
      message: 'IMPL_101'
    });
});

module.exports = router;