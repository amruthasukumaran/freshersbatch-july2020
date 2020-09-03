import express from 'express';
import Order from '../models/orderModel';
import { isAuth, isAdmin } from '../util';

const router = express.Router();

router.get("/", isAuth, async (req, res) => {
  const orders = await Order.find({}).populate('user');
  res.send(orders);
});

/**
 * @swagger
 * /mine:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *       '200':
 *         description: A successful response
 */


router.get("/mine", isAuth, async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.send(orders);
});

/**
 * @swagger
 * /5f5056f1a88fa9292c4b411a:
 *  get:
 *    description: Get by id
 *       
 *    responses:
 *       '200':
 *         description: A successful response
 */

router.get("/:id", isAuth, async (req, res) => {
  const order = await Order.findOne({ _id: req.params.id });
  if (order) {
    res.send(order);
  } else {
    res.status(404).send("Order Not Found.")
  }
});


/**
 * @swagger
 * /{id}:
 *  delete:
 *    description: This order will be deleted
 *       
 *    responses:
 *       '200':
 *         description: A successful response
 */

router.delete("/:id", isAuth, isAdmin, async (req, res) => {
  const order = await Order.findOne({ _id: req.params.id });
  if (order) {
    const deletedOrder = await order.remove();
    res.send(deletedOrder);
  } else {
    res.status(404).send("Order Not Found.")
  }
});


/**
 * @swagger
 * /:
 *  post:
 *    description: Create a new order
 *       
 *    responses:
 *       '200':
 *         description: A successful response
 */



router.post("/", isAuth, async (req, res) => {
  const newOrder = new Order({
    orderItems: req.body.orderItems,
    user: req.user._id,
    shipping: req.body.shipping,
    payment: req.body.payment,
    itemsPrice: req.body.itemsPrice,
    taxPrice: req.body.taxPrice,
    shippingPrice: req.body.shippingPrice,
    totalPrice: req.body.totalPrice,
  });
  const newOrderCreated = await newOrder.save();
  res.status(201).send({ message: "New Order Created", data: newOrderCreated });
});



/**
 * @swagger
 * /5f5056f1a88fa9292c4b411a/pay:
 *  put:
 *    description: This is update an order
 *       
 *    responses:
 *       '200':
 *         description: A successful response
 */


router.put("/:id/pay", isAuth, async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.payment = {
      paymentMethod: 'paypal',
      paymentResult: {
        payerID: req.body.payerID,
        orderID: req.body.orderID,
        paymentID: req.body.paymentID
      }
    }
    const updatedOrder = await order.save();
    res.send({ message: 'Order Paid.', order: updatedOrder });
  } else {
    res.status(404).send({ message: 'Order not found.' })
  }
});

export default router;