const mongo = require("../connect");
const { ObjectId } = require("mongodb");

module.exports.getEmpolyees = async (req, res) => {
  try {
    const employeesData = await mongo.selectedDB
      .collection("employees")
      .find()
      .toArray();
    res.send(employeesData);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
module.exports.updateEmpolyees = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = await mongo.selectedDB
      .collection("employees")
      .findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: { ...req.body } },
        { returnDocument: "after" }
      );
    res.send(updatedData);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
module.exports.createEmpolyees = async (req, res) => {
  try {
    // console.log(req.body);
    const insertedResponse = await mongo.selectedDB
      .collection("employees")
      .insertOne(req.body);
    res.send(insertedResponse);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};
module.exports.deleteEmpolyees = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteData = await mongo.selectedDB
      .collection("employees")
      .remove({ _id: ObjectId(id) });
    res.send(deleteData);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
