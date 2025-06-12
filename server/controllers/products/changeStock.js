import Product from "../../models/product.model.js";

const changeStock = async (req, res) => {
  try {
    const { id, inStock } = req.body;

    await Product.findByIdAndUpdate(id, { inStock });

    res.json({ message: "Stock updated", success: true });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
};

export default changeStock;
