const db = require("../db");

exports.getCourses = (req, res) => {
  db.query("SELECT * FROM courses", (err, results) => {
    if (err) return res.json(err);
    res.json(results);
  });
};

exports.addCourse = (req, res) => {
  const { course_name, credit_hours } = req.body;
  const sql = "INSERT INTO courses (course_name, credit_hours) VALUES (?, ?)";

  db.query(sql, [course_name, credit_hours], (err) => {
    if (err) return res.json(err);
    res.json({ message: "Course added" });
  });
};

exports.updateCourse = (req, res) => {
  const id = req.params.id;
  const { course_name, credit_hours } = req.body;

  const sql = "UPDATE courses SET course_name=?, credit_hours=? WHERE course_id=?";
  db.query(sql, [course_name, credit_hours, id], (err) => {
    if (err) return res.json(err);
    res.json({ message: "Course updated" });
  });
};

exports.deleteCourse = (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM courses WHERE course_id=?", [id], (err) => {
    if (err) return res.json(err);
    res.json({ message: "Course deleted" });
  });
};
