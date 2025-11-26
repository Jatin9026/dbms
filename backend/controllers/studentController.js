const db = require("../db");

exports.getStudents = (req, res) => {
  db.query("SELECT * FROM students", (err, results) => {
    if (err) return res.json(err);
    res.json(results);
  });
};

exports.addStudent = (req, res) => {
  const { name, email, contact } = req.body;
  const sql = "INSERT INTO students (name, email, contact) VALUES (?, ?, ?)";

  db.query(sql, [name, email, contact], (err, result) => {
    if (err) return res.json(err);
    res.json({ message: "Student added" });
  });
};

exports.updateStudent = (req, res) => {
  const id = req.params.id;
  const { name, email, contact } = req.body;

  const sql = "UPDATE students SET name=?, email=?, contact=? WHERE student_id=?";
  db.query(sql, [name, email, contact, id], (err) => {
    if (err) return res.json(err);
    res.json({ message: "Student updated" });
  });
};

exports.deleteStudent = (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM students WHERE student_id=?", [id], (err) => {
    if (err) return res.json(err);
    res.json({ message: "Student deleted" });
  });
};
