import mongoose from "mongoose";
import slugify from "slugify-mongoose";

const typeSchema = new mongoose.Schema({
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

    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        trim: true,
    }]
}, {
    timestamps: true
});




typeSchema.plugin(slugify);



export default mongoose.models.Type || mongoose.model("Type", typeSchema);
