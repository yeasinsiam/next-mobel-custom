import mongoose from "mongoose";
// import validator from "validator";

const imageSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Please Image Name"],
    },

    url: {
        type: String,
        trim: true,
        unique: true,
        required: [true, "Please give image url"],
        // validate: {
        //     validator: value => validator.isURL(value),
        //     message: 'Must be a Valid URL'
        // },
    },

    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        trim: true,
    }]
}, {
    timestamps: true
});





export default mongoose.models.Image || mongoose.model("Image", imageSchema);
