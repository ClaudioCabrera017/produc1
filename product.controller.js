const Product = require('../models/product.model');


module.exports.create = (req, res) => {
  Product.create(req.body)
    .then((product) => res.json({ product: product }))
    .catch((error) => res.json({ message: "Something went wrong when create a product", error: error }));
};