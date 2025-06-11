import User from "../../models/user.model.js";
import { hashPassword } from "../../configs/password.js";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (
      [name, email, password].some((item) => !item || item.trim().length === 0)
    ) {
      return res.json({ success: false, message: "Missing credentials" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await hashPassword(password, 12);

    const user = await User.create({ name, email, password: hashedPassword });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.json({
      success: true,
      message: "User created",
      user: { name: user.name, email: user.email },
    });
  } catch (error) {
    console.log(`Error in the create user ${error.message}.`);
    return res.json({ success: false, message: error.message });
  }
};

export default register;
