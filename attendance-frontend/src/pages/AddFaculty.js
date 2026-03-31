import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addFaculty } from "../services/facultyService";

function AddFaculty() {
  const navigate = useNavigate();

  const [faculty, setFaculty] = useState({
    name: "",
    email: "",
    department: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFaculty({ ...faculty, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await addFaculty(faculty);
      setMessage(response.data);

      if (response.data === "Faculty added successfully") {
        setFaculty({
          name: "",
          email: "",
          department: ""
        });
      }
    } catch (error) {
      setMessage("Error adding faculty");
      console.error(error);
    }
  };

  return (
    <div className="mt-4">
      <button className="btn btn-secondary mb-3" onClick={() => navigate("/")}>
        Back to Dashboard
      </button>

      <h3>Add Faculty</h3>

      <form onSubmit={handleSubmit} className="w-50">
        <input
          type="text"
          name="name"
          placeholder="Enter faculty name"
          className="form-control mb-3"
          value={faculty.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter faculty email"
          className="form-control mb-3"
          value={faculty.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="department"
          placeholder="Enter department"
          className="form-control mb-3"
          value={faculty.department}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn btn-primary">
          Save Faculty
        </button>
      </form>

      {message && <p className="mt-3">{message}</p>}
    </div>
  );
}

export default AddFaculty;