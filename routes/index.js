const express = require('express');
const { find } = require('../tweetBank');
const router = express.Router();
// Se puede usar solo una linea: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get( '/users/:name', function (req, res) {
    let name = tweetBank.find(name);
    console.log(req.params.name )
    res.render( 'index', {name: name} );
});
    


module.exports = router;