const { model } = require("mongoose");
const { OrdersSchema } = require("../schemas/OrdersSchema");

const OrderModel = model("Order", OrdersSchema); 

module.exports = { OrderModel };
