import mongoose from "mongoose";
const orderid = require('order-id')('key');
import validator from "validator";

const orderSchema = new mongoose.Schema({

    orderId: {
        type: String,
        trim: true,
        default: orderid.generate()
    },

    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        trim: true,
        required: [true, 'Please Enter Product']
    },


    checkoutData: {
        fullName: {
            type: String,
            trim: true,
            required: [true, 'Please enter fullname'],
        },
        companyName: {
            type: String,
            trim: true,
        },
        zipCode: {
            type: String,
            trim: true,
        },
        city: {
            type: String,
            trim: true,
            required: [true, 'Please enter city'],

        },
        phone: {
            type: String,
            trim: true,
            required: [true, 'Please enter phone'],

        },
        email: {
            type: String,
            trim: true,
            required: true,
            lowercase: true,
            validate: {
                validator: validator.isEmail,
                message: "Please enter a valid email",
            },
        },
        address: {
            type: String,
            trim: true,
        },
    },

}, {
    timestamps: true
});





export default mongoose.models.Order || mongoose.model("Order", orderSchema);
