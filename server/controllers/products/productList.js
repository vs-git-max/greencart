import Product from "../../models/product.model.js";

const productList = async (req, res) => {
  try {
    const products = await Product.find({});

    res.json({ success: true, products });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
};

export default productList;
