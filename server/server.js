const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express();

process.env.PORT = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(require('./routes/tareas'));

app.listen(process.env.PORT, () => {
	console.log('Server run on port ',process.env.PORT);
});

mongoose.connect('mongodb://obed:2guitarras@ds129762.mlab.com:29762/tareas', { useNewUrlParser: true }, (err, res) => {
	if (err) throw Error
	console.log('DB online');
})