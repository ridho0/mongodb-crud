const express = require('express');
const bodyParser = require('body-parser');
const app = express()

app.set('port', process.env.PORT || 3000)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/books', require('./routes/books'));

app.listen(app.get('port'), function(){
  console.log('listening on port '+app.get('port'))
})
 
