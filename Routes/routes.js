const express = require("express");
const router = express.Router();
const {
  GET_ALL_SUBMISSIONS,
  POST_SUBMISSION_BY_USER,
  DELETE_SUBMISSION_ALL_RECORDS,
} = require("../Controller/controllers");

router
  .get("/get-sub", GET_ALL_SUBMISSIONS)
  .post("/post-sub", POST_SUBMISSION_BY_USER)
  .delete("/delete-sub", DELETE_SUBMISSION_ALL_RECORDS);

module.exports = router;
