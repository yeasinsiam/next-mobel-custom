import { connectDBFromApi } from "db/dbConnect";
import nc from "next-connect";
// controllers
import { createImage, getAllImages } from "db/controllers/imageController";


const handler = nc({

    onNoMatch: (req, res) => {
        res.status(404).end("API is not found");
    },
});

// get all images
handler.get(async (req, res) => {
    const images = await getAllImages();
    res.status(200).json({ body: { images } });
});

// create a image
handler.post(async (req, res) => {
    const newImage = await createImage(req.body);
    res.status(200).json({ body: { newImage } });
});


export default connectDBFromApi(handler);
