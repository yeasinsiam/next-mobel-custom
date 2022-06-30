
import Contact from "db/models/Contact";





// Get all Contacts
async function getAllContacts() {
    return await Contact.find({});
}


// get single order
// async function getOrder(orderId) {
//     return await Order
//         .findById(orderId)
//         .populate({
//             path: 'product',
//             populate: ["types", "images"]
//         });
// // }


// // Create a order
async function createContact(body) {
    return await new Contact(body).save();
}




// // // // Update a order
// // async function updateImage(imageId, body) {

// //     const newImage = body;

// //     const newProducts = newImage.product || [];

// //     const oldImage = await Image.findById(imageId);
// //     const oldProducts = oldImage.product;


// //     Object.assign(oldImage, newImage);
// //     const newUpdatedImage = await oldImage
// //         .save()
// //         .then(image => image.populate('product'));


// //     const added = difference(newProducts, oldProducts);
// //     const removed = difference(oldProducts, newProducts);
// //     await Product.updateMany({ '_id': removed }, { $pull: { images: newUpdatedImage._id } });
// //     await Product.updateMany({ '_id': added }, { $push: { images: newUpdatedImage._id } });

// //     return newUpdatedImage;
// // }




// // // Delete a order
// async function deleteOrder(orderId) {

//     const deletedOrder = await Order
//         .findByIdAndDelete(orderId)
//         .populate({
//             path: 'product',
//             populate: ["types", "images"]
//         });

//     await Product.findByIdAndUpdate(
//         deletedOrder.product._id,
//         { $pull: { orders: deletedOrder._id } },
//         // { new: true, useFindAndModify: false }
//     );

//     return deletedOrder;
// }


export { getAllContacts, createContact };

