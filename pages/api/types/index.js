import { connectDBFromApi } from "db/dbConnect";
import nc from "next-connect";
// Controllers
import { createType, getAllTypes } from "db/controllers/typeController";

const handler = nc({

    onNoMatch: (req, res) => {
        res.status(404).end("API is not found");
    },
});

handler.get(async (req, res) => {
    const types = await getAllTypes();
    res.status(200).json({ body: { types } });
});

handler.post(async (req, res) => {

    const newType = await createType(req.body)

    res.status(200).json({ body: { newType } });
});

export default connectDBFromApi(handler);
