const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let tareaSchema = new Schema({
	tarea: {
		type: String,
		required: [true, 'la tarea es requerida']
	}
});

module.exports = mongoose.model('Tarea', tareaSchema);