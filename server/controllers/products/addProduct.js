import { v2 as cloudinary } from "cloudinary";
import Product from "../../models/product.model.js";

const addProduct = async (req, res) => {
  try {
    let productData = JSON.parse(req.body.productData);

    const images = req.files;

    let imageURL = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    await Product.create({ ...productData, image: imageURL });

    return res.json({ success: true, message: "Product added." });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
};

export default addProduct;
