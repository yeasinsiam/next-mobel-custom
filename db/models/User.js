// // models/User.js
// import mongoose from "mongoose";
// import validator from "validator";

// const UserSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     trim: true,
//     required: [true, "Please Enter Name"],
//   },
//   email: {
//     type: String,
//     trim: true,
//     required: true,
//     lowercase: true,
//     validate: {
//       validator: validator.isEmail,
//       message: "Please enter a valid email",
//     },
//   },
// });

// const User = mongoose.models.User || mongoose.model("User", UserSchema);

// export default User;
