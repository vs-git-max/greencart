import Product from "../../models/product.model.js";

const getProduct = async (req, res) => {
  try {
    const { id } = req.body;

    const product = await Product.findById(id);

    if (!product)
      return res.json({ success: false, message: "Product not found" });

    return res.json({
      success: true,
      product,
    });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
};

export default getProduct;
