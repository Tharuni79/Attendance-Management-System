import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllStudents } from "../services/studentService";
import { getAllSubjects } from "../services/subjectService";
import axios from "axios";

function AttendancePercentage() {
  const navigate = useNavigate();

  const [students, setStudents] = useState([]);
  const [subjects, setSubjects] = useState([]);

  const [formData, setFormData] = useState({
    studentId: "",
    subjectId: ""
  });

  const [percentage, setPercentage] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchStudents();
    fetchSubjects();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await getAllStudents();
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students", error);
    }
  };

  const fetchSubjects = async () => {
    try {
      const response = await getAllSubjects();
      setSubjects(response.data);
    } catch (error) {
      console.error("Error fetching subjects", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheck = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:8085/attendance/percentage/student/${formData.studentId}/subject/${formData.subjectId}`
      );
      setPercentage(response.data);
      setMessage("");
    } catch (error) {
      console.error("Error fetching percentage", error);
      setMessage("Error fetching attendance percentage");
      setPercentage(null);
    }
  };

  return (
    <div className="mt-4">
      <button className="btn btn-secondary mb-3" onClick={() => navigate("/")}>
        Back to Dashboard
      </button>

      <h3>Attendance Percentage</h3>

      <form onSubmit={handleCheck} className="w-50">
        <select
          name="studentId"
          className="form-control mb-3"
          value={formData.studentId}
          onChange={handleChange}
          required
        >
          <option value="">Select Student</option>
          {students.map((student) => (
            <option key={student.id} value={student.id}>
              {student.name} - {student.department}
            </option>
          ))}
        </select>

        <select
          name="subjectId"
          className="form-control mb-3"
          value={formData.subjectId}
          onChange={handleChange}
          required
        >
          <option value="">Select Subject</option>
          {subjects.map((subject) => (
            <option key={subject.id} value={subject.id}>
              {subject.subjectName} - {subject.subjectCode}
            </option>
          ))}
        </select>

        <button type="submit" className="btn btn-primary">
          Check Percentage
        </button>
      </form>

      {percentage !== null && (
        <div className="alert alert-info mt-3">
          Attendance Percentage: <strong>{percentage.toFixed(2)}%</strong>
        </div>
      )}

      {message && <p className="mt-3 text-danger">{message}</p>}
    </div>
  );
}

export default AttendancePercentage;