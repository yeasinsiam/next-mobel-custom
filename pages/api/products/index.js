import { connectDBFromApi } from "db/dbConnect";
import nc from "next-connect";
// Controllers
import {
  createProduct,
  getAllProducts,
} from "db/controllers/productController";

const handler = nc({
  // onError: (err, req, res) => {
  //   console.error(err.stack);
  //   res.status(500).end("Something broke!");
  // },
  onNoMatch: (req, res) => {
    res.status(404).end("API is not found");
  },
});

// get all products route
handler.get(async (req, res) => {
  const { typeId, page, productsPerPage } = req.query;

  const products = await getAllProducts({
    typeId: typeId || "",
    page: page || 1,
    productsPerPage: productsPerPage,
  });
  res.status(200).json({ body: products });
});

// create product route
handler.post(async (req, res) => {
  const newProduct = await createProduct(req.body);

  res.status(200).json({ body: { newProduct } });
});

export default connectDBFromApi(handler);
