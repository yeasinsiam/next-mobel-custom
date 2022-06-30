import { deleteOrder, getOrder } from "db/controllers/orderController";
import { connectDBFromApi } from "db/dbConnect";
import nc from "next-connect";
// models

const handler = nc({
    // onError: (err, req, res) => {
    //   console.error(err.stack);
    //   res.status(500).end("Something broke!");
    // },
    onNoMatch: (req, res) => {
        res.status(404).end("API is not found");
    },
});

// // get  order


handler.get(async (req, res) => {
    let { orderId } = req.query;

    const order = await getOrder(orderId);

    if (order) {
        res.status(200).json({ body: { order } });
        return;
    }
    res.status(404).end("Order not found");
});


// // update order route
// handler.put(async (req, res) => {
//     let { orderId } = req.query;

//     const updatedProduct = await updateProduct(orderId, req.body);


//     if (updatedProduct) {
//         res.status(200).json({ body: { updatedProduct } });
//         return;
//     }
//     return res.status(404).end("Order not found");

// });

// Delete order route
handler.delete(async (req, res) => {
    let { orderId } = req.query;

    const deletedOrder = await deleteOrder(orderId);


    if (deletedOrder) {
        res.status(200).json({ body: { deletedOrder } });
        return;
    }
    res.status(404).end("Order not found");
});

export default connectDBFromApi(handler);
