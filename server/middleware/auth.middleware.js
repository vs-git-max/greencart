import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.json({ success: false, message: "No token found" });
  }

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    console.log(req.body.userId);
    if (decode.id) {
      req.body.userId = decode.id;
    } else {
      return res.json({ success: false, message: "Not authorized" });
    }

    next();
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export default authUser;
