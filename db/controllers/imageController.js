// Models
import Image from "db/models/Image";
import Product from "db/models/Product";
import "db/models/Type";
// helpers
import { difference } from "db/helpers/helperFunctions";




// Get all images
async function getAllImages() {
    return await Image.find({}).populate('products');
}


// get single image
async function getImage(imageId) {
    return await Image
        .findById(imageId)
        .populate('products');
}


// Create a image
async function createImage(body) {

    const newImage = new Image(body);

    const image = await newImage
        .save()
        .then(image => image.populate('products'));


    await Product.updateMany({ _id: image.products }, { $push: { images: image._id } });

    return image;

}




// // Update a image
async function updateImage(imageId, body) {

    const newImage = body;

    const newProducts = newImage.products || [];

    const oldImage = await Image.findById(imageId);
    const oldProducts = oldImage.products;


    Object.assign(oldImage, newImage);
    const newUpdatedImage = await oldImage
        .save()
        .then(image => image.populate('products'));


    const added = difference(newProducts, oldProducts);
    const removed = difference(oldProducts, newProducts);
    await Product.updateMany({ '_id': removed }, { $pull: { images: newUpdatedImage._id } });
    await Product.updateMany({ '_id': added }, { $push: { images: newUpdatedImage._id } });

    return newUpdatedImage;
}




// Delete a image
async function deleteImage(imageId) {

    const deletedImage = await Image
        .findByIdAndDelete(imageId)
        .populate('products');

    await Product.updateMany({ _id: deletedImage.products }, { $pull: { images: deletedImage._id } });

    return deletedImage;
}


export { getAllImages, getImage, createImage, updateImage, deleteImage };

