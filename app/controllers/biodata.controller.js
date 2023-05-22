const db = require('../models');

const Biodata = db.biodata;

const create = (req, res) => {
  if (!req.body.nama) {
    res.status(400).send({
      message: "Content can't be empty!",
    });
  }

  const biodata = {
    nama: req.body.nama,
    tempat_lahir: req.body.tempat_lahir,
    tanggal_lahir: req.body.tanggal_lahir,
    alamat: req.body.alamat,
  };

  Biodata.create(biodata)
    .then((data) => {
      res.send(data);
    }).catch((err) => {
      res.status(500).send({
        message: 'Error Occured while inserting biodata!',
        error: err,
      });
    });
};

const findAll = (req, res) => {
  Biodata.findAll()
    .then((data) => {
      res.send(data);
    }).catch((err) => {
      res.status(500).send({
        message: err.message || 'Error while retrieving biodata!',
        error: err,
      });
    });
};

const findOne = (req, res) => {
  Biodata.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      res.send(data);
    }).catch((err) => {
      res.status(500).send({
        message: 'Error while finding biodata!',
        error: err,
      });
    });
};

const update = (req, res) => {
  const biodata = {
    nama: req.body.nama,
    tempat_lahir: req.body.tempat_lahir,
    tanggal_lahir: req.body.tanggal_lahir,
    alamat: req.body.alamat,
  };

  Biodata.update(
    biodata,
    {
      where: {
        id: req.params.id,
      },
    },
  )
    .then((data) => {
      res.send({
        message: `Success update biodata with id ${req.params.id}`,
        data,
      });
    }).catch((err) => {
      res.send({
        message: 'Error while finding biodata!',
        error: err.message,
      });
    });
};

const deleteOne = (req, res) => {
  Biodata.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.send({
        message: `Success delete biodata with id ${req.params.id}`,
      });
    }).catch((err) => {
      res.status(500).send({
        message: `Could not delete biodata with id = ${req.params.id}`,
        error: err,
      });
    });
};

module.exports = {
  create,
  findAll,
  findOne,
  update,
  deleteOne,
};
