const router = require('express').Router();
const axios = require('axios');
const config = require('../../config.js');

const apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/';
const headers = {
  headers: {
    'User-Agent': 'request',
    Authorization: `${config.TOKEN}`,
  },
};

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.get('/questions', (req, res) => {
  axios.get(`${apiUrl}qa/questions/?product_id=${req.query.productId}&count=${req.query.count}`, headers)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.post('/questionPost', (req, res) => {
  const {
    productId,
    body,
    name,
    email,
  } = req.body;
  axios.post(`${apiUrl}qa/questions`, {
    body,
    name,
    email,
    product_id: productId,
  }, headers)
    .then((response) => {
      console.log(response);
      res.send('posted question');
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

router.post('/answerPost', (req, res) => {
  const {
    body,
    name,
    email,
    photos,
    questionId,
  } = req.body;
  const answerHeaders = {
    headers: {
      'User-Agent': 'request',
      Authorization: `${config.TOKEN}`,
    },
    question_id: questionId,
  };
  axios.post(`${apiUrl}qa/questions/${questionId}/answers`, {
    body,
    name,
    email,
    photos,
  }, answerHeaders)
    .then(() => {
      res.send('successfully posted answer');
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

router.get('/answers', (req, res) => {
  axios.get(`${apiUrl}qa/questions/${req.query.questionId}/answers/?count=${req.query.answerCount}`, headers)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
