import { connectDBFromApi } from "db/dbConnect";
import nc from "next-connect";
// Controllers
import { createOrder, getAllOrders } from "db/controllers/orderController";




const handler = nc({
  // onError: (err, req, res) => {
  //   console.error(err.stack);
  //   res.status(500).end("Something broke!");
  // },
  onNoMatch: (req, res) => {
    res.status(404).end("API is not found");
  },
});

// get all orders route
handler.get(async (req, res) => {

  const orders = await getAllOrders();
  res.status(200).json({ body: orders });
});

// create order route
handler.post(async (req, res) => {
  const newOrder = await createOrder(req.body);

  res.status(200).json({ body: { newOrder } });
});

export default connectDBFromApi(handler);
