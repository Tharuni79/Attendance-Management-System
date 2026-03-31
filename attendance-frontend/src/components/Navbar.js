import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Attendance System</Link>

        <div className="d-flex flex-wrap">
          <Link className="btn btn-light btn-sm m-1" to="/">Home</Link>
          <Link className="btn btn-light btn-sm m-1" to="/add-student">Add Student</Link>
          <Link className="btn btn-light btn-sm m-1" to="/students">Students</Link>
          <Link className="btn btn-light btn-sm m-1" to="/add-faculty">Add Faculty</Link>
          <Link className="btn btn-light btn-sm m-1" to="/add-subject">Add Subject</Link>
          <Link className="btn btn-light btn-sm m-1" to="/mark-attendance">Mark Attendance</Link>
          <Link className="btn btn-light btn-sm m-1" to="/attendance">View Attendance</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;