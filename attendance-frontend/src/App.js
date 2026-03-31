import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AddStudent from "./pages/AddStudent";
import ViewStudents from "./pages/ViewStudents";
import AddFaculty from "./pages/AddFaculty";
import ViewFaculty from "./pages/ViewFaculty";
import AddSubject from "./pages/AddSubject";
import MarkAttendance from "./pages/MarkAttendance";
import ViewAttendance from "./pages/ViewAttendance";
import AttendancePercentage from "./pages/AttendancePercentage";
import FacultyDashboard from "./pages/FacultyDashboard";
import StudentDashboard from "./pages/StudentDashboard";

function App() {
  return (
    <Router>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/faculty-dashboard" element={<FacultyDashboard />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/students" element={<ViewStudents />} />
          <Route path="/add-faculty" element={<AddFaculty />} />
          <Route path="/faculty" element={<ViewFaculty />} />
          <Route path="/add-subject" element={<AddSubject />} />
          <Route path="/mark-attendance" element={<MarkAttendance />} />
          <Route path="/attendance" element={<ViewAttendance />} />
          <Route path="/attendance-percentage" element={<AttendancePercentage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;