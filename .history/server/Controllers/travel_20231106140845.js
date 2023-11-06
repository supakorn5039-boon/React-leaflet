const Travel = require("../Models/travel");

exports.list = async (req, res) => {
  try {
    // code
    const producted = await Travel.find({}).exec();
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
    // console.log(req.file);

    var data = req.body;
    if (req.file) {
      data.file = req.file.filename;
    }
    const producted = await Travel(data).save();
    res.send(producted);
  } catch (err) {
    // error
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.remove = async (req, res) => {
  try {
    // code
    const id = req.params.id;
    const removed = await Product.findOneAndDelete({ _id: id }).exec();
    res.send(removed);
  } catch (err) {
    // error
    console.log(err);
    res.status(500).send("Server Error");
  }
};
