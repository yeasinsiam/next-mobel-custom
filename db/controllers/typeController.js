// Models
import Type from "db/models/Type";
import Product from "db/models/Product";
// helpers
import { difference } from "db/helpers/helperFunctions";




// Get all types
async function getAllTypes() {
    return await Type.find({}).populate(['products']);
}


// // get single type
async function getType(typeId) {
    return await Type
        .findById(typeId)
        .populate('products');
}


// // Create a type
async function createType(body) {

    const newType = new Type(body);

    const type = await newType
        .save()
        .then(type => type.populate('products'));


    await Product.updateMany({ _id: type.products }, { $push: { types: type._id } });

    return type;


}




// // Update a type
async function updateType(typeId, body) {

    const newType = body;

    const newProducts = newType.products || [];

    const oldType = await Type.findById(typeId);
    const oldProducts = oldType.products;


    Object.assign(oldType, newType);
    const newUpdatedType = await oldType
        .save()
        .then(type => type.populate('products'));


    const added = difference(newProducts, oldProducts);
    const removed = difference(oldProducts, newProducts);
    await Product.updateMany({ '_id': removed }, { $pull: { types: newUpdatedType._id } });
    await Product.updateMany({ '_id': added }, { $push: { types: newUpdatedType._id } });

    return newUpdatedType;
}




// // Delete a type
async function deleteType(typeId) {

    const deletedType = await Type
        .findByIdAndDelete(typeId)
        .populate('products');

    await Product.updateMany({ _id: deletedType.products }, { $pull: { types: deletedType._id } });

    return deletedType;
}


export { getAllTypes, getType, createType, updateType, deleteType };

