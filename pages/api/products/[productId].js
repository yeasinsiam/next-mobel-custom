import { connectDBFromApi } from "db/dbConnect";
import nc from "next-connect";
// models
import { deleteProduct, getProduct, updateProduct } from "db/controllers/productController";

const handler = nc({
    // onError: (err, req, res) => {
    //   console.error(err.stack);
    //   res.status(500).end("Something broke!");
    // },
    onNoMatch: (req, res) => {
        res.status(404).end("API is not found");
    },
});

// get  product
handler.get(async (req, res) => {
    let { productId } = req.query;

    const product = await getProduct(productId);

    if (product) {
        res.status(200).json({ body: { product } });
        return;
    }
    res.status(404).end("Product not found");
});


// update product route
handler.put(async (req, res) => {
    let { productId } = req.query;

    const updatedProduct = await updateProduct(productId, req.body);


    if (updatedProduct) {
        res.status(200).json({ body: { updatedProduct } });
        return;
    }
    return res.status(404).end("Product not found");

});

// Delete product route
handler.delete(async (req, res) => {
    let { productId } = req.query;

    const deletedProduct = await deleteProduct(productId);


    if (deletedProduct) {
        res.status(200).json({ body: { deletedProduct } });
        return;
    }
    res.status(404).end("Product not found");
});

export default connectDBFromApi(handler);
