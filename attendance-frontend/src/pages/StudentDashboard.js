import { useNavigate } from "react-router-dom";

function StudentDashboard() {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-5">
      <h2>Student Dashboard</h2>

      <div className="d-grid gap-3 col-6 mx-auto mt-4">
        <button className="btn btn-primary" onClick={() => navigate("/attendance")}>
          View Attendance
        </button>

        <button className="btn btn-primary" onClick={() => navigate("/attendance-percentage")}>
          View Attendance Percentage
        </button>
      </div>
    </div>
  );
}

export default StudentDashboard;