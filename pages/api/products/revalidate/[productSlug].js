// This route is for revalidating single product



export default async function handler(req, res) {

    const { secret, productSlug } = req.query;



    // Check for secret to confirm this is a valid request
    if (secret !== process.env.TOKEN) {
        return res.status(401).json({ message: 'Invalid token' });
    }


    try {
        await res.unstable_revalidate(`/products/${productSlug}`);
        return res.json({ revalidated: true });
    } catch (err) {
        // If there was an error, Next.js will continue
        // to show the last successfully generated page
        return res.status(500).send('Error revalidating');
    }
}
