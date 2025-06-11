import jwt from "jsonwebtoken";

const authAdmin = async (req, res, next) => {
  const { adminToken } = req.cookies;

  if (!adminToken) {
    return res.json({
      success: true,
      message: "No tokens found",
    });
  }

  try {
    const decode = jwt.verify(adminToken, process.env.JWT_SECRET);

    if (decode.email == process.env.ADMIN_EMAIL) {
      next();
    } else {
      return res.json({ success: false, message: "Not authorized" });
    }
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export default authAdmin;
