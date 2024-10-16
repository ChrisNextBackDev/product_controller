let PRODUCTS = [
    { 
        id: 1, 
        title: "Essence Mascara Lash Princess", 
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 10,
        stock: 5,
        brand: "Essence",
        dimensions: {
             "width": 23.17,
             "height": 14.43,
             "depth": 28.01
        },
        returnPolicy: "30 days return policy",
        image_url: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
        warrantyInformation: "1 month warranty",
        shippingInformation: "Ships in 1 month",
        availabilityStatus: "Low Stock",
        reviews: [
            {
              rating: 2,
              comment: "Very unhappy with my purchase!",
              date: "2024-05-23T08:56:21.618Z",
              reviewerName: "John Doe",
              reviewerEmail: "john.doe@x.dummyjson.com"
            },
            {
              rating: 2,
              comment: "Not as described!",
              date: "2024-05-23T08:56:21.618Z",
              reviewerName: "Nolan Gonzalez",
              reviewerEmail: "nolan.gonzalez@x.dummyjson.com"
            },
        ],    
    },

    { 
        id: 2, 
        title:  "Eyeshadow Palette with Mirror", 
        description:"The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
        category: "beauty",
        price: 21,
        stock: 44,
        brand: "Glamour Beauty",
        dimensions: {
             "width": 12.17,
             "height": 8.43,
             "depth": 29.01
        },
        returnPolicy: "20 days return policy",
        image_url: "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
        warrantyInformation: "2 month warranty",
        shippingInformation: "Ships in 1.5 month",
        availabilityStatus: "Medium Stock",
        reviews: [
            {
              rating: 4,
              comment: "Very happy with my purchase!",
              date: "2024-05-23T08:56:21.618Z",
              reviewerName: "Liam Grace",
              reviewerEmail: "liam.garcia@x.dummyjson.com"
            },
            {
              rating: 1,
              comment: "Very Dissappointed!",
              date: "2024-05-23T08:56:21.618Z",
              reviewerName: "Nora Russel",
              reviewerEmail: "nora.russeel@x.dummyjson.com"
            },
        ],    
    },

    { 
        id: 3, 
        title:  "Powder Canister", 
        description:"The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
        category: "beauty",
        price: 12,
        stock: 57,
        brand: "Velvet Touch",
        dimensions: {
             "width": 24.17,
             "height": 11.43,
             "depth": 13.01
        },
        returnPolicy: "25 days return policy",
        image_url:       "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
        warrantyInformation: "2 years warranty",
        shippingInformation: "Ships in 1-5 month",
        availabilityStatus: "In Stock",
        reviews: [
            {
              rating: 5,
              comment: "Very happy with my purchase!",
              date: "2024-05-23T08:56:21.618Z",
              reviewerName: "Ethan Thompson",
              reviewerEmail: "Ethan.Thomson@x.dummyjson.com"
            },
            {
              rating: 4,
              comment: "Great Value for money!",
              date: "2024-05-23T08:56:21.618Z",
              reviewerName: "Levi Hicks",
              reviewerEmail: "levi.hicks@x.dummyjson.com"
            },
        ],    
    },

    { 
      id: 4, 
      title:  "Lipstick", 
      description:"The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
      category: "glow",
      price: 12,
      stock: 23,
      brand: "Glow Touch",
      dimensions: {
           "width": 24.17,
           "height": 11.43,
           "depth": 13.01
      },
      returnPolicy: "25 days return policy",
      image_url:       "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
      warrantyInformation: "2 years warranty",
      shippingInformation: "Ships in 1-5 month",
      availabilityStatus: "In Stock",
      reviews: [
          {
            rating: 5,
            comment: "Very happy with my purchase!",
            date: "2024-05-23T08:56:21.618Z",
            reviewerName: "Ethan Thompson",
            reviewerEmail: "Ethan.Thomson@x.dummyjson.com"
          },
          {
            rating: 4,
            comment: "Great Value for money!",
            date: "2024-05-23T08:56:21.618Z",
            reviewerName: "Levi Hicks",
            reviewerEmail: "levi.hicks@x.dummyjson.com"
          },
      ],    
  }, 
  ];


  exports.getAllProducts = (req, res) => {
    return res.json({ products: PRODUCTS });
  };


  exports.getWelcomeMessage = (req, res) => {
    const name = "Chris";
    res.json({
      message: `Welcome to our e-commerce store ${name}, have a wonderful tour`,
    });
  };




  exports.getProductById = (req, res) => {
    const productId = parseInt(req.params.productId);
    const product = PRODUCTS.find((product) => product.id === productId);
    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }
    return res.json({ product });
  };


  exports.updateProduct = (req, res) => {
    const productId = parseInt(req.params.productId);
    let product = PRODUCTS.find((product) => product.id === productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    console.log(req.body);
    product.price = req.body?.price || product.price;
    product.stock = req.body?.stock || product.stock;
    PRODUCTS = PRODUCTS.map((item) => {
      if (item.id === product.id) {
        return product;
      }
      return item;
    });
    return res.json({ product });
  };


  exports.createProduct = (req, res) => {
    const newProduct = {
      id: PRODUCTS.length + 1,
      name: req.body?.name,
      price: req.body?.price,
      brand: req.body?.brand,
      image_url: req.body?.image_url,
    };
    PRODUCTS.push(newProduct);
    return res.status(201).json({ product: newProduct });
  };

  exports.deleteProduct = (req, res) => {
    const productId = parseInt(req.params.productId);
    PRODUCTS = PRODUCTS.filter((product) => product.id !== productId);
    return res.status(204).send();
  };
  


  // exports.getProductByPrice = (req, res) => {
  //   const productPrice = parseInt(req.params.productPrice);
  //   const productPric = PRODUCTS.filter((productPric) => productPric.price === productPrice);
  //   if (!productPric) {
  //     return res.status(404).json({ message: `Product with the price ${productPrice} does not exist` });
  //   }
  //   return res.json({ productPric });
  // };


  // exports.getProductByCategory = (req, res) => {
  //   const productCategory = parseInt(req.params.productCategory);
  //   const productCat = PRODUCTS.filter((productCat) => productCat.price === productCategory);
  //   if (!productCat) {
  //     return res.status(404).json({ message: `Product with the price ${productCategory} does not exist` });
  //   }
  //   return res.json({ productCat });
  // };
















  // exports.getProductByCategory = (req, res) => {
  //   const productCategory = req.params.productCategory;
  //   const productCat = PRODUCTS.filter((product) => product.category === productCategory);
  //   if (!productCat.category) {
  //     return res.status(404).json({ message: `product with the category ${productCategory} does not exist` });
  //   }
  //   return res.json({ productCat });
  // };


  // exports.getProductByPrice = (req, res) => {
  //   const productPrice = parseInt(req.params.productPrice);
  //   const productPric = PRODUCTS.filter((product) => product.price === productPrice);
  //   if (!productPric.price) {
  //     return res.status(404).json({ message: `product with the price ${productPrice} does not exist` });
       
  //   }
  //    return res.json({ productPric });
  // };

//   exports.getProductByCategoryName = (req, res) =>{
//     const categoryName = req.params.categoryName;
//     const product = PRODUCTS.filter(p => p.category);
//   };