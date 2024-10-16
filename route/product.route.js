const express = require("express");

const {
    getAllProducts,
    getWelcomeMessage,
    getProductById,
    //getProductByCategory,
    //getProductByPrice,
    updateProduct,
    createProduct,
    deleteProduct,
  } = require("../controller/product.controller");
  
  const router = express.Router();

  router.route("/").get(getAllProducts).post(createProduct);
  router.get("/welcome", getWelcomeMessage);
  router.route("/:productId").get(getProductById).patch(updateProduct).delete(deleteProduct);
  //router.get("/:productCategory", getProductByCategory);
  //router.get("/:productPrice", getProductByPrice);

  module.exports = router;