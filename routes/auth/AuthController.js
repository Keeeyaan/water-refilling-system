import User from "../../models/User.js";

//CONNECT SA FRONTEND

const register = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).send("please provide all values");
  }

  res.status(200).json(req.body);
};
const login = async (req, res) => {
  res.send("login");
};
const updateUser = async (req, res) => {
  res.send("update");
};

export { register, login, updateUser };
