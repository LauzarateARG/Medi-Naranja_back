const { Product } = require("../../src/models")
const { v4: uuidv4 } = require("uuid");

const getProducts = (req, res, next) => {
  return Product.findAll()
    .then((products) => {
      res.send(products);
    })
    .catch((err) => next(err));
};

const createProducts = (req, res, next) => {
  const product = req.body;
  return Product.create({
    ...product,
    id: uuidv4(),
  })
    .then((produts) => res.send(produts))
    .catch((err) => next(err));
};

const updateProducts = (req, res, next) => {
  const id = req.params.id;
  const product = req.body;
  return Product.update(product, {
    where: {
      id,
    },
  })
    .then(() => res.send("actualizado con exito"))
    .catch((err) => next(err));
};

const deleteProducts = (req, res, next) => {
  const id = req.params.id;
  return Product.destroy({
    where: {
      id,
    },
  })
    .then(() => res.send("eliminado con exito"))
    .catch((err) => next(err));
};

module.exports = {
  getProducts,
  createProducts,
  updateProducts,
  deleteProducts,
};
