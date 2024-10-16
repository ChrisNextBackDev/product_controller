const express = require("express");
const userRoutes = require("./route/user.route");
const productRoutes = require("./route/product.route");

// Initialize exxpres app
const app = express();

const port = 3005;

// Declare middleware functions
app.use(express.json());

// Define routes
app.use("/users", userRoutes);

app.use("/products", productRoutes);

app.post("/", (req, res) => {
  const name = "Latifat";
  res.json({
    message: `${name}, do you want to post`,
  });
});

app.put("/", (req, res) => {
  const name = "Latifat";
  res.json({
    message: `${name}, do you want to put`,
  });
});

app.delete("/", (req, res) => {
  const name = "Latifat";
  res.json({
    message: `${name}, do you want to delete`,
  });
});

app.use("*", (req, res) => {
  res.status(404).json({ message: "Invalid endpoint" });
});

// Start the server on the specified port number
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
