import jwt from "jsonwebtoken";
import User from "../../models/user.model.js";
import { comparePassword } from "../../configs/password.js";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if ([email, password].some((item) => !item || item.trim() === " ")) {
      return res.json({ success: false, message: "Missing some credentials" });
    }

    const isUser = await User.findOne({ email });

    if (!isUser) {
      return res.json({
        success: false,
        message: "User with the email not found",
      });
    }

    const correctPassword = await comparePassword(password, isUser.password);

    if (!correctPassword) {
      return res.json({ success: false, message: "Wrong password added." });
    }

    //creating the token on login
    const token = jwt.sign({ id: isUser._id }, process.env.JWT_SECRET, {
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
      message: "Login success",
      user: {
        email: isUser.email,
        name: isUser.name,
      },
    });
  } catch (error) {
    console.log(`Error in the login :${error.message}`);
    return res.json({ success: false, message: error.message });
  }
};

export default login;
