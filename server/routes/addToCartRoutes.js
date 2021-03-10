const addToCartRoutes = require('express').Router();
const axios = require('axios');
const config = require('../../config.js');

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/';
const headers = {
  headers: {
    'User-Agent': 'request',
    Authorization: `${config.TOKEN}`,
  },
};

addToCartRoutes.get('/', (req, res) => {
  console.log('hi');
  axios.get(`${url}cart`, headers)
    .then((cart) => {
      res.send(cart.data);
    })
    .catch((err) => {
      console.error(err);
    });
});

addToCartRoutes.post('/', (req, res) => {
  axios.post(`${url}cart`, req.body, headers)
    .then(() => {
      res.send('added to cart');
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = addToCartRoutes;
