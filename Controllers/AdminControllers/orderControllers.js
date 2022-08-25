const { v4: uuidv4 } = require("uuid");
const { Order } = require("../../src/models/index");

const getOrders = (req, res, next) => {
  return Order.findAll()
    .then((orders) => {
      res.send(orders);
    })
    .catch((err) => next(err));
};

const createOrders = (req, res, next) => {
  const order = req.body;
  return Order.create({
    ...order,
    id: uuidv4(),
  })
    .then((orders) => res.send(orders))
    .catch((err) => next(err));
};

const updateOrder = (req, res, next) => {
  const id = req.params.id;
  const order = req.body;
  return Order.update(order, {
    where: {
      id,
    },
  })
    .then(() => res.send("actualizado con exito"))
    .catch((err) => next(err));
};

const deletedOrder =  (req, res, next) => {
    const id = req.params.id;
    return Order.destroy({
      where: {
        id,
      },
    })
      .then(() => res.send("eliminado con exito"))
      .catch((err) => next(err));
  }

module.exports={
    getOrders,
    createOrders,
    updateOrder,
    deletedOrder,
}