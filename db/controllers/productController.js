// Models
import Product from "db/models/Product";
import Type from "db/models/Type";
import Image from "db/models/Image";
import Order from "db/models/Order";
// helpers
import { difference } from "db/helpers/helperFunctions";




// Get all products
async function getAllProducts({
    typeId,
    page,
    productsPerPage
}) {

    let filters = {};
    let filterOptions = {
        typeId: ""
    };

    if (typeId) {
        filters = {
            ...filters,
            types: typeId
        }

        filterOptions = {
            ...filterOptions,
            typeId
        }
    }

    const options = {
        page,
        limit: productsPerPage,
        populate: ['types', 'images', 'orders'],
        customLabels: {
            docs: 'products',
            totalDocs: "totalProducts"
        }
    };

    const product = await Product.paginate(filters, options);


    return { ...product, filterOptions };



    // return await Product.find({}, null, { skip: 0, limit: 3 }).populate(['types', 'images']);
}


// get single product
async function getProduct(productSlugOrId) {

    var query = { $or: [{ slug: productSlugOrId }] };
    if (productSlugOrId.match(/^[0-9a-fA-F]{24}$/)) {
        query.$or.push({ _id: productSlugOrId });
    }


    return await Product
        .findOne(query)
        .populate(['types', 'images', 'orders']);
}


// Create a Product 
async function createProduct(body) {
    const newProduct = new Product(body);

    const product = await newProduct
        .save()
        .then(product => product.populate(['types', 'images', 'orders']));


    await Type.updateMany({ _id: product.types }, { $push: { products: product._id } });
    await Image.updateMany({ _id: product.images }, { $push: { products: product._id } });

    return product;

}




// Update a Product 
async function updateProduct(productId, body) {

    const newProduct = body;

    const newTypes = newProduct.types || [];
    const newImages = newProduct.images || [];

    const oldProduct = await Product.findById(productId);
    const oldTypes = oldProduct.types;
    const oldImages = oldProduct.images;


    Object.assign(oldProduct, newProduct);
    const newUpdatedProduct = await oldProduct
        .save()
        .then(product => product.populate(['types', 'images', 'orders']));


    // Types sync
    const addedTypes = difference(newTypes, oldTypes);
    const removedTypes = difference(oldTypes, newTypes);
    await Type.updateMany({ '_id': removedTypes }, { $pull: { products: newUpdatedProduct._id } });
    await Type.updateMany({ '_id': addedTypes }, { $push: { products: newUpdatedProduct._id } });

    // Images sync
    const addedImages = difference(newImages, oldImages);
    const removedImages = difference(oldImages, newImages);
    await Image.updateMany({ '_id': removedImages }, { $pull: { products: newUpdatedProduct._id } });
    await Image.updateMany({ '_id': addedImages }, { $push: { products: newUpdatedProduct._id } });

    return newUpdatedProduct;
}




// Delete a Product
async function deleteProduct(productId) {

    const deletedProduct = await Product
        .findByIdAndDelete(productId)
        .populate(["types", 'images', 'orders']);

    await Type.updateMany({ _id: deletedProduct.types }, { $pull: { products: deletedProduct._id } });
    await Image.updateMany({ _id: deletedProduct.images }, { $pull: { products: deletedProduct._id } });

    return deletedProduct;
}


export { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct };

