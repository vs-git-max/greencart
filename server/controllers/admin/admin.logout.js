const adminLogout = (req, res) => {
  try {
    res.clearCookie("adminToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.json({ success: true, message: "Admin logout success" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export default adminLogout;
