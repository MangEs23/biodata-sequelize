const express = require('express');

const routes = express.Router();

const biodataController = require('./app/controllers/biodata.controller');

routes.get('/', (req, res) => {
  biodataController.findAll(req, res);
});

routes.get('/:id', (req, res) => {
  biodataController.findOne(req, res);
});

routes.post('/', (req, res) => {
  biodataController.create(req, res);
});

routes.put('/:id', (req, res) => {
  biodataController.update(req, res);
});

routes.delete('/:id', (req, res) => {
  biodataController.deleteOne(req, res);
});

module.exports = routes;
