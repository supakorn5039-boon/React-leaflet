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
    console.log(req.file);

    var data = req.body;

    const producted = await Travel(req.body).save();
    res.send(producted);
  } catch (err) {
    // error
    console.log(err);
    res.status(500).send("Server Error");
  }
};
