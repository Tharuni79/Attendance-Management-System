import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllAttendance } from "../services/attendanceService";

function ViewAttendance() {
  const navigate = useNavigate();
  const [attendanceList, setAttendanceList] = useState([]);

  useEffect(() => {
    fetchAttendance();
  }, []);

  const fetchAttendance = async () => {
    try {
      const response = await getAllAttendance();
      setAttendanceList(response.data);
    } catch (error) {
      console.error("Error fetching attendance", error);
    }
  };

  return (
    <div className="mt-4">
      <button className="btn btn-secondary mb-3" onClick={() => navigate("/")}>
        Back to Dashboard
      </button>

      <h3>Attendance Records</h3>

      <table className="table table-bordered table-striped mt-3">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Student Name</th>
            <th>Subject Name</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceList.length > 0 ? (
            attendanceList.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.student ? item.student.name : ""}</td>
                <td>{item.subject ? item.subject.subjectName : ""}</td>
                <td>{item.date}</td>
                <td>{item.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No attendance records found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ViewAttendance;