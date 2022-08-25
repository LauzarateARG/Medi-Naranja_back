const { Sequelize } = require("sequelize");
const config = require("../utils/config/index");
const ClientFactory = require("./client");
const ProductFactory = require("./product");
const OrderFactory = require("./order");


const sequelize = new Sequelize(
  `postgresql://${config.dbUser}:${config.dbPassword}@${config.dbHost}:${config.PORT}/${ config.dbName}`
);

const Client = ClientFactory(sequelize)
const Product = ProductFactory(sequelize)
const Order = OrderFactory(sequelize)

Client.hasMany(Order,{as:"Pedidos", foreignKey:"client_Id"})
Order.belongsTo(Client,{as:"Cliente", foreignKey:"client_Id"})

module.exports = {
  conn: sequelize,
  Client,
  Product,
  Order
}