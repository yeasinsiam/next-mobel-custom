import { connectDBFromApi } from "db/dbConnect";
import nc from "next-connect";
// Controllers
import { deleteType, getType, updateType } from "db/controllers/typeController";



const handler = nc({
    onNoMatch: (req, res) => {
        res.status(404).end("API is not found");
    },
});

// get  single type
handler.get(async (req, res) => {
    let { typeId } = req.query;

    const type = await getType(typeId);


    if (type) {
        res.status(200).json({ body: { type } });
        return;
    }
    res.status(404).end("Type not found");
});


// // update type route
handler.put(async (req, res) => {
    let { typeId } = req.query;

    const updatedType = await updateType(typeId, req.body)


    if (updatedType) {
        res.status(200).json({ body: { updatedType } });
        return;
    }
    return res.status(404).end("Type not found");

});



// // delete type route
handler.delete(async (req, res) => {
    let { typeId } = req.query;

    const type = await deleteType(typeId);

    if (type) {
        res.status(200).json({ body: { type } });
        return;
    }
    res.status(404).end("Type not found");
});

export default connectDBFromApi(handler);
