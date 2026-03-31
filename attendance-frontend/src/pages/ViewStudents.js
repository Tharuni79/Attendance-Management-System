import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllStudents } from "../services/studentService";

function ViewStudents() {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await getAllStudents();
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students", error);
    }
  };

  return (
    <div className="mt-4">
      <button className="btn btn-secondary mb-3" onClick={() => navigate("/")}>
        Back to Dashboard
      </button>

      <h3>Students List</h3>

      <table className="table table-bordered table-striped mt-3">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.department}</td>
                <td>{student.year}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No students found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ViewStudents;