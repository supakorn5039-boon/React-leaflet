const Product = require("../Models/Product");

exports.list = async (req, res) => {
  try {
    // code
    const producted = await Product.find({}).exec();
    res.send(producted);
  } catch (err) {
    // error
    console.log(err);
    res.status(500).send("Server Error");
  }
};
exports.create = async (req, res) => {
  try {
    // code
    console.log(req.body);
    const producted = await Product(req.body).save();
    res.send(producted);
  } catch (err) {
    // error
    console.log(err);
    res.status(500).send("Server Error");
  }
};
