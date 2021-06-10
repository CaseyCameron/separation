const { Router } = require('express');
const Order = require('../models/Order');

// export default Router.......
module.exports = Router() // app.post(....)
  .post('/api/v1/orders', async (req, res) => {
    try {
      const postOrder = await Order.insert(req.body.quantityOfItems);
      res.send(postOrder);
    } catch (err) {
      res.status(500).send(err);
    }
  })

  .get('/api/v1/orders', async (req, res) => {
    try {
      const getOrders = await Order.getRows();
      res.send(getOrders);
    } catch (err) {
      res.status(500).send(err);
    }
  })

  .get('/api/v1/orders/:id', async (req, res) => {
    try {
      const getOrder = await Order.getRow(req.params.id);
      res.send(getOrder);
    } catch (err) {
      res.status(500).send(err);
    }
  })

  .put('api/v1/orders/:id', async (req, res) => {
    try {
      const putOrder = await Order.put(req.body.quantityOfItems, req.params.id);
      res.send(putOrder);
    } catch (err) {
      res.status(500).send(err);
    }
  })

  .delete('api/v1/orders/:id', async (req, res) => {
    try {
      const deleteOrder = await Order.deleteRow(req.params.id);
      res.send(deleteOrder);
    } catch (err) {
      res.status(500).send(err);
    }
  })

  .delete('api/v1/orders', async (req, res) => {
    try {
      const deleteOrders = await Order.deleteAllRows()
      res.send(deleteOrders);
    } catch (err) {
      res.status(500).send(err);
    }
  });

