import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllStudents } from "../services/studentService";
import { getAllSubjects } from "../services/subjectService";
import { markAttendance } from "../services/attendanceService";

function MarkAttendance() {
  const navigate = useNavigate();

  const [students, setStudents] = useState([]);
  const [subjects, setSubjects] = useState([]);

  const [attendance, setAttendance] = useState({
    studentId: "",
    subjectId: "",
    date: "",
    status: "PRESENT"
  });

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
    setAttendance({ ...attendance, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const attendanceData = {
      date: attendance.date,
      status: attendance.status,
      student: {
        id: parseInt(attendance.studentId)
      },
      subject: {
        id: parseInt(attendance.subjectId)
      }
    };

    try {
      const response = await markAttendance(attendanceData);
      setMessage(response.data);

      setAttendance({
        studentId: "",
        subjectId: "",
        date: "",
        status: "PRESENT"
      });
    } catch (error) {
      setMessage("Error marking attendance");
      console.error(error);
    }
  };

  return (
    <div className="mt-4">
      <button className="btn btn-secondary mb-3" onClick={() => navigate("/")}>
        Back to Dashboard
      </button>

      <h3>Mark Attendance</h3>

      <form onSubmit={handleSubmit} className="w-50">
        <select
          name="studentId"
          className="form-control mb-3"
          value={attendance.studentId}
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
          value={attendance.subjectId}
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

        <input
          type="date"
          name="date"
          className="form-control mb-3"
          value={attendance.date}
          onChange={handleChange}
          required
        />

        <select
          name="status"
          className="form-control mb-3"
          value={attendance.status}
          onChange={handleChange}
          required
        >
          <option value="PRESENT">PRESENT</option>
          <option value="ABSENT">ABSENT</option>
        </select>

        <button type="submit" className="btn btn-primary">
          Save Attendance
        </button>
      </form>

      {message && <p className="mt-3">{message}</p>}
    </div>
  );
}

export default MarkAttendance;