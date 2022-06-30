import { connectDBFromApi } from "db/dbConnect";
import nc from "next-connect";
// controllers
import { deleteImage, getImage, updateImage } from "db/controllers/imageController";

const handler = nc({
    // onError: (err, req, res) => {
    //   console.error(err.stack);
    //   res.status(500).end("Something broke!");
    // },
    onNoMatch: (req, res) => {
        res.status(404).end("API is not found");
    },
});

// get  image
handler.get(async (req, res) => {
    let { imageId } = req.query;

    const image = await getImage(imageId);
    if (image) {
        res.status(200).json({ body: { image } });
    }
    res.status(404).end("Image not found");
});


// // update image
handler.put(async (req, res) => {
    let { imageId } = req.query;
    const updatedImage = await updateImage(imageId, req.body);

    if (updatedImage) {
        res.status(200).json({ body: { updatedImage } });
    }
    res.status(404).end("Image not found");

});



// // delete type route
handler.delete(async (req, res) => {
    let { imageId } = req.query;

    const deletedImage = await deleteImage(imageId);

    if (deletedImage) {
        res.status(200).json({ body: { deletedImage } });
        return;
    }
    res.status(404).end("Image not found");
});


export default connectDBFromApi(handler);
