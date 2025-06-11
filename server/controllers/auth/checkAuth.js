import User from "../../models/user.model.js";

const isAuth = async (req, res) => {
  try {
    const { userId } = req.body;

    const user = await User.findById(userId).select("-password");

    return res.json({ success: true, user });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export default isAuth;
