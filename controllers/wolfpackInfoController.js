const db = require('../models');

module.exports = {
  // find the wolfpack by id
  findWolfpackById: function(req, res) {
    db.Wolfpack.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // get the wolfpack backpack
  findWpBackpackById: function(req, res) {
    db.WpBackpack.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // get users in the wolfpack
  findUserById: function(req, res) {
    db.User.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findWolfPackMemberById: function(req, res) {
    db.WolfPackMember.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

}