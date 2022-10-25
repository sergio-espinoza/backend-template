import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/data', (req, res) => {
  console.log('...........');
  console.log('req -> get');
  console.log(new Date());
  console.log('req -> body', req.body);
  console.log('req -> params', req.params);
  console.log('...........');

  return res.json({ data: 'data --> get' });
});

app.post('/data', (req, res) => {
  console.log('...........');
  console.log('req -> post');
  console.log(new Date());
  console.log('req -> body', req.body);
  console.log('req -> params', req.query);
  console.log('...........');

  return res.json({ data: 'data --> post' });
});

app.listen(3000, () => console.log(3000));
