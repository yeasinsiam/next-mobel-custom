// // import dbConnect from "db/dbConnect";
// import { createUser, getUsers } from "db/controllers/userControllers";
// import connectDB from "db/dbConnect";
// import nc from "next-connect";

// const handler = nc({
//   // onError: (err, req, res) => {
//   //   console.error(err.stack);
//   //   res.status(500).end("Something broke!");
//   // },
//   onNoMatch: (req, res) => {
//     res.status(404).end("API is not found");
//   },
// });

// handler.get(async (req, res) => {
//   const users = await getUsers();
//   res.status(200).json({ body: { users } });
// });

// handler.post(async (req, res) => {
//   const user = await createUser(req);
//   res.status(200).json({ body: { user } });
// });

// export default connectDB(handler);
