import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllFaculty } from "../services/facultyService";

function ViewFaculty() {
  const navigate = useNavigate();
  const [facultyList, setFacultyList] = useState([]);

  useEffect(() => {
    fetchFaculty();
  }, []);

  const fetchFaculty = async () => {
    try {
      const response = await getAllFaculty();
      setFacultyList(response.data);
    } catch (error) {
      console.error("Error fetching faculty", error);
    }
  };

  return (
    <div className="mt-4">
      <button className="btn btn-secondary mb-3" onClick={() => navigate("/")}>
        Back to Dashboard
      </button>

      <h3>Faculty List</h3>

      <table className="table table-bordered table-striped mt-3">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {facultyList.length > 0 ? (
            facultyList.map((faculty) => (
              <tr key={faculty.id}>
                <td>{faculty.id}</td>
                <td>{faculty.name}</td>
                <td>{faculty.email}</td>
                <td>{faculty.department}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No faculty found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ViewFaculty;