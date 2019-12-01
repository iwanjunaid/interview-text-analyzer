const express = require('express');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const app = express();
const port = process.env.PORT || 3000;

const inputValidator = require('./validators/inputValidator');
const postController = require('./controllers/post');

nunjucks.configure('./views', {
  autoescape: true,
  express: app,
});

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index.html');
});

app.post('/', inputValidator, postController);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});