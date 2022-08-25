const { Client } = require("../../src/models");

const getClients = (req, res, next) => {
  return Client.findAll()
    .then((clients) => {
      res.send(clients);
    })
    .catch((err) => next(err));
};

const updateClients = (req, res, next) => {
  const id = req.params.id;
  const client = req.body;
  return Client.update(client, {
    where: {
      id,
    },
  })
    .then(() => res.send("actualizado con exito"))
    .catch((err) => next(err));
};

const deleteClients = (req, res, next) => {
  const id = req.params.id;
  return Client.destroy({
    where: {
      id,
    },
  })
    .then(() => res.send("Cliente eliminado con exito"))
    .catch((err) => next(err));
};

module.exports = {
  getClients,
  updateClients,
  deleteClients,
};
