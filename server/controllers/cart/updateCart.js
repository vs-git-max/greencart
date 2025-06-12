import User from "../../models/user.model.js";

const updateCart = async (req, res) => {
  try {
    const { userId, cartItems } = req.body;

    await User.findByIdAndUpdate(userId, { cartItems });

    res.json({ success: true, message: "Cart updates" });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
};

export default updateCart;
