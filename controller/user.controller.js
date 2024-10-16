let USERS = [
  { id: 1, name: "John Doe", email: "john.doe@example.com" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
  { id: 3, name: "John Smith", email: "john.smith@example.com" },
];

exports.getAllUsers = (req, res) => {
  return res.json({ users: USERS });
};

exports.updateUser = (req, res) => {
  const userId = parseInt(req.params.userId);
  let user = USERS.find((user) => user.id === userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  console.log(req.body);
  user.name = req.body?.name || user.name;
  user.email = req.body?.email || user.email;
  USERS = USERS.map((item) => {
    if (item.id === user.id) {
      return user;
    }
    return item;
  });
  return res.json({ user });
};

exports.getUserById = (req, res) => {
  const userId = parseInt(req.params.userId);
  const user = USERS.find((user) => user.id === userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  return res.json({ user });
};

exports.getWelcomeMessage = (req, res) => {
  const name = "Smith Ross";
  res.json({
    message: `Welcome ${name}`,
  });
};

exports.deleteUser = (req, res) => {
  const userId = parseInt(req.params.userId);
  USERS = USERS.filter((user) => user.id !== userId);
  return res.status(204).send();
};

exports.createUser = (req, res) => {
  const newUser = {
    id: USERS.length + 1,
    name: req.body?.name,
    email: req.body?.email,
  };
  USERS.push(newUser);
  return res.status(201).json({ user: newUser });
};
