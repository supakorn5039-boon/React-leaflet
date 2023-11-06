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
    const removed = await Travel.findOneAndDelete({ _id: id }).exec();
    res.send(removed);
  } catch (err) {
    // error
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.read = async (req, res) => {
  try {
    const id = req.params.id;
    const travel = await Travel.findOne({ _id: id }).exec();
    res.send(travel);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.update = async (req, res) => {
  try {
    //Code
    const id = req.params.id;

    var data = req.body;
    if (req.file) {
      data.file = req.file.filename;
    }

    const update = await Travel.findOneAndUpdate({ _id: id }, data, {
      new: true,
    }).exec();

    res.send(update);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};
