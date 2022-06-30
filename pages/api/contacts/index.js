import { connectDBFromApi } from "db/dbConnect";
import nc from "next-connect";
// Controllers
import { createContact, getAllContacts } from "db/controllers/contactController";





const handler = nc({

  onNoMatch: (req, res) => {
    res.status(404).end("API is not found");
  },
});

// get all contacts route
handler.get(async (req, res) => {

  const contacts = await getAllContacts();
  res.status(200).json({ body: contacts });
});

// create contact route
handler.post(async (req, res) => {
  const newContact = await createContact(req.body);
  res.status(200).json({ body: { newContact } });
});

export default connectDBFromApi(handler);
