const db = require('../models');

module.exports = {
  // get wolfpack by id
  findWolfpackById: function(req, res) {
    db.Wolfpack.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // create wolfpack
  createWolfpack: function(req, res) {
    db.Wolfpack.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}