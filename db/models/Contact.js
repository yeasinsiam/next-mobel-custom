import mongoose from "mongoose";
import validator from "validator";


const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Please Enter Name"],
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

    subject: {
        type: String,
        trim: true,
        required: [true, "Please Enter Subject"],
    },

    message: {
        type: String,
        trim: true,
        required: [true, "Please Enter Message"],
    },


}, {
    timestamps: true
});




export default mongoose.models.Contact || mongoose.model("Contact", contactSchema);
