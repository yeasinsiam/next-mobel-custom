import Order from "db/models/Order";
import Product from "db/models/Product";
import "db/models/Type";
import "db/models/Image";

// Get all orders
async function getAllOrders() {
  return await Order.find({}).populate({
    path: "product",
    populate: ["types", "images"],
  });
}

// get single order
async function getOrder(orderId) {
  return await Order.findById(orderId).populate({
    path: "product",
    populate: ["types", "images"],
  });
}

// Create a order
async function createOrder(body) {
  const newOrder = new Order(body);

  const order = await newOrder.save().then((order) =>
    order.populate({
      path: "product",
      populate: ["types", "images"],
    })
  );

  // await Product.update({ _id: order.product }, { $push: { orders: order._id } });

  await Product.findByIdAndUpdate(
    order.product._id,
    { $push: { orders: order._id } }
    // { new: true, useFindAndModify: false }
  );

  return order;
}

// // // Update a order
// async function updateImage(imageId, body) {

//     const newImage = body;

//     const newProducts = newImage.product || [];

//     const oldImage = await Image.findById(imageId);
//     const oldProducts = oldImage.product;

//     Object.assign(oldImage, newImage);
//     const newUpdatedImage = await oldImage
//         .save()
//         .then(image => image.populate('product'));

//     const added = difference(newProducts, oldProducts);
//     const removed = difference(oldProducts, newProducts);
//     await Product.updateMany({ '_id': removed }, { $pull: { images: newUpdatedImage._id } });
//     await Product.updateMany({ '_id': added }, { $push: { images: newUpdatedImage._id } });

//     return newUpdatedImage;
// }

// // Delete a order
async function deleteOrder(orderId) {
  const deletedOrder = await Order.findByIdAndDelete(orderId).populate({
    path: "product",
    populate: ["types", "images"],
  });

  await Product.findByIdAndUpdate(
    deletedOrder.product._id,
    { $pull: { orders: deletedOrder._id } }
    // { new: true, useFindAndModify: false }
  );

  return deletedOrder;
}

export { getAllOrders, getOrder, createOrder, deleteOrder };
