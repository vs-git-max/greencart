import Address from "../../models/address.model.js";

const addAddress = async (req, res) => {
  try {
    const { address, userId } = req.body;

    await Address.create({
      ...address,
      userId,
    });

    return res.json({
      success: true,
      message: "Address added successfully",
    });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
};

export default addAddress;
