const express = require('express');
const app = express();

app.set('view engine', 'ejs')

function tossCoin() {
  return Math.random() > 0.5;
}

app.get('/', async (req, res) => {
  res.render('index.ejs', { heads: tossCoin() });
})

app.post('/toss', async (req, res) => {
  res.render('index.ejs', { heads: tossCoin() });
})

app.listen(3000, () => { console.log('listening from 3000')});
