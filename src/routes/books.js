// Libraries

const { Router } = require('express');

const router = new Router();

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.post('/', (req, res) => {
  res.send('Hello World Post');
});

router.put('/:id', (req, res) => {
  res.send('Hello World Put');
});

router.delete('/:id', (req, res) => {
  res.send('Hello World Delete');
});

module.exports = router;
