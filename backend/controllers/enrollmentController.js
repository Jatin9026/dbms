const db = require("../db");

exports.getEnrollments = (req, res) => {
  const sql = `
    SELECT e.enrollment_id, s.name AS student, c.course_name AS course
    FROM enrollments e
    JOIN students s ON e.student_id = s.student_id
    JOIN courses c ON e.course_id = c.course_id
  `;
  db.query(sql, (err, results) => {
    if (err) return res.json(err);
    res.json(results);
  });
};

exports.addEnrollment = (req, res) => {
  const { student_id, course_id } = req.body;
  const sql = "INSERT INTO enrollments (student_id, course_id) VALUES (?, ?)";

  db.query(sql, [student_id, course_id], (err) => {
    if (err) return res.json(err);
    res.json({ message: "Enrollment added" });
  });
};

exports.deleteEnrollment = (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM enrollments WHERE enrollment_id=?", [id], (err) => {
    if (err) return res.json(err);
    res.json({ message: "Enrollment removed" });
  });
};
