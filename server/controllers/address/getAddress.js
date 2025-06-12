import Address from "../../models/address.model.js";

const getAddress = async (req, res) => {
  try {
    const { userId } = req.body;

    const address = await Address.find({ userId });

    res.json({ success: true, address });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
};

export default getAddress;
