import mongoose from "mongoose";
import slugify from "slugify-mongoose";
const mongoosePaginate = require('mongoose-paginate-v2');

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "Please Enter Name"],
    },
    slug: {
      type: String,
      slug: "title",
      unique: true,
    },

    types: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Type",
        trim: true,
      },
    ],

    images: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Image",
        trim: true,
      },
    ],

    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        trim: true,
      },
    ],

  },
  {
    timestamps: true,
  }
);



productSchema.plugin(slugify);
productSchema.plugin(mongoosePaginate);

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
