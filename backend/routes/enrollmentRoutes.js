const express = require("express");
const { getEnrollments, addEnrollment, deleteEnrollment } = require("../controllers/enrollmentController");
const router = express.Router();

router.get("/", getEnrollments);
router.post("/", addEnrollment);
router.delete("/:id", deleteEnrollment);

module.exports = router;
