import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addStudent } from "../services/studentService";

function AddStudent() {
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    email: "",
    department: "",
    year: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await addStudent(student);
      setMessage(response.data);

      if (response.data === "Student added successfully") {
        setStudent({
          name: "",
          email: "",
          department: "",
          year: ""
        });
      }
    } catch (error) {
      setMessage("Error adding student");
      console.error(error);
    }
  };

  return (
    <div className="mt-4">
      <button className="btn btn-secondary mb-3" onClick={() => navigate("/")}>
        Back to Dashboard
      </button>

      <h3>Add Student</h3>

      <form onSubmit={handleSubmit} className="w-50">
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          className="form-control mb-3"
          value={student.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          className="form-control mb-3"
          value={student.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="department"
          placeholder="Enter department"
          className="form-control mb-3"
          value={student.department}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="year"
          placeholder="Enter year"
          className="form-control mb-3"
          value={student.year}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn btn-primary">
          Save Student
        </button>
      </form>

      {message && <p className="mt-3">{message}</p>}
    </div>
  );
}

export default AddStudent;