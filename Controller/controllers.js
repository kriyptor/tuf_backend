const dataBase = require("../Model/schema");

async function GET_ALL_SUBMISSIONS(req, res) {
  try {
    const allPosts = await dataBase.findAll();
    res.json(allPosts);
  } catch (err) {
    console.log(err);
  }
}

async function POST_SUBMISSION_BY_USER(req, res) {
  const { userName, codeLanguage, sourceCode } = req.body;
  if (!userName || !codeLanguage || !sourceCode) {
    return res
      .status(400)
      .json({ message: "Please provide all required fields" });
  }
  try {
    const newPost = await dataBase.create({
      userName,
      codeLanguage,
      sourceCode,
    });
    return res
      .status(201)
      .json({ message: "Submission created successfully", newPost });
  } catch (err) {
    console.log(err);
  }
}

async function DELETE_SUBMISSION_ALL_RECORDS(req, res) {
  try {
    const rowsDeleted = await dataBase.destroy({
      where: {}, // Empty where condition deletes all records
    });
    res
      .status(200)
      .json({ message: `${rowsDeleted} records deleted successfully.` });
  } catch (error) {
    console.error("Error deleting records:", error);
    res.status(500).json({ error: "Error deleting records" });
  }
}

module.exports = {
  GET_ALL_SUBMISSIONS,
  POST_SUBMISSION_BY_USER,
  DELETE_SUBMISSION_ALL_RECORDS,
};
