import { useNavigate } from "react-router-dom";

function FacultyDashboard() {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-5">
      <h2>Faculty Dashboard</h2>

      <div className="d-grid gap-3 col-6 mx-auto mt-4">

        <button className="btn btn-primary" onClick={() => navigate("/add-student")}>
          Add Student
        </button>

        <button className="btn btn-primary" onClick={() => navigate("/add-subject")}>
          Add Subject
        </button>

        <button className="btn btn-primary" onClick={() => navigate("/mark-attendance")}>
          Mark Attendance
        </button>

        <button className="btn btn-primary" onClick={() => navigate("/attendance")}>
          View Attendance
        </button>

      </div>
    </div>
  );
}

export default FacultyDashboard;