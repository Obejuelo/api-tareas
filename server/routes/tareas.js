const express = require('express')
const app = express();

const Tarea = require('../models/tareas');

app.get('/tarea', (res) => {
	Tarea.find((err, tareas) => {
		if (err) {
			return res.status(400).json({ err })
		}
		res.json({
			ok:true,
			tareas
		})
	})
});

app.post('/tarea', (req, res) => {
	let body = req.body;

	let tarea = new Tarea({
		tarea: body.tarea
	})

	tarea.save((err, tareaDB) => {
		if (err) {
			return res.status(400).json({ err })
		}

		res.json({
			ok:true,
			message: 'La tarea fue agregada'
		})
	})
});

app.put('/tarea/:id', (req, res) => {
	let id = req.params.id;
	let body = req.body;

	Tarea.findByIdAndUpdate(id, body, (err, tarea) => {
		if (err) {
			return res.status(400).json({ err })
		}

		res.json({
			ok:true,
			message: 'La tarea fué actualizada'
		});
	})
});

app.delete('/tarea/:id', (req, res) => {
	let id = req.params.id;
	let body = req.body;

	Tarea.findByIdAndRemove(id, body, (err, tarea) => {
		if (err) {
			return res.status(400).json({ err })
		}

		res.json({
			ok: true,
			message: 'La tarea fué eliminada'
		});
	})
})

module.exports = app;