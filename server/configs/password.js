import bcrypt from "bcryptjs";

export const hashPassword = async (password, salt = 10) => {
  return await bcrypt.hashSync(password, salt);
};

export const comparePassword = async (currentPassword, inputPassword) =>
  await bcrypt.compareSync(currentPassword, inputPassword);
