import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-5">
      <h2 className="mb-4">Attendance Management Dashboard</h2>
      <p className="mb-4">Select an option below</p>

      <div className="d-grid gap-3 col-6 mx-auto">
        <button className="btn btn-primary" onClick={() => navigate("/add-student")}>
          Add Student
        </button>

        <button className="btn btn-primary" onClick={() => navigate("/students")}>
          View Students
        </button>

        <button className="btn btn-primary" onClick={() => navigate("/add-faculty")}>
          Add Faculty
        </button>

        <button className="btn btn-primary" onClick={() => navigate("/faculty")}>
          View Faculty
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

        <button className="btn btn-primary" onClick={() => navigate("/attendance-percentage")}>
          Attendance Percentage
        </button>
      </div>
    </div>
  );
}

export default Dashboard;