import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addSubject } from "../services/subjectService";
import { getAllFaculty } from "../services/facultyService";

function AddSubject() {
  const navigate = useNavigate();

  const [subject, setSubject] = useState({
    subjectName: "",
    subjectCode: "",
    facultyId: ""
  });

  const [facultyList, setFacultyList] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchFaculty();
  }, []);

  const fetchFaculty = async () => {
    try {
      const response = await getAllFaculty();
      setFacultyList(response.data);
    } catch (error) {
      console.error("Error fetching faculty", error);
      setMessage("Error loading faculty list");
    }
  };

  const handleChange = (e) => {
    setSubject({ ...subject, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const subjectData = {
      subjectName: subject.subjectName,
      subjectCode: subject.subjectCode,
      faculty: {
        id: parseInt(subject.facultyId)
      }
    };

    console.log("Sending subject data:", subjectData);

    try {
      const response = await addSubject(subjectData);
      setMessage(response.data);

      if (response.data === "Subject added successfully") {
        setSubject({
          subjectName: "",
          subjectCode: "",
          facultyId: ""
        });
      }
    } catch (error) {
      console.error("Full subject error:", error);
      if (error.response) {
        console.error("Backend response:", error.response.data);
        setMessage("Error: " + JSON.stringify(error.response.data));
      } else {
        setMessage("Error adding subject");
      }
    }
  };

  return (
    <div className="mt-4">
      <button className="btn btn-secondary mb-3" onClick={() => navigate("/")}>
        Back to Dashboard
      </button>

      <h3>Add Subject</h3>

      <form onSubmit={handleSubmit} className="w-50">
        <input
          type="text"
          name="subjectName"
          placeholder="Enter subject name"
          className="form-control mb-3"
          value={subject.subjectName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="subjectCode"
          placeholder="Enter subject code"
          className="form-control mb-3"
          value={subject.subjectCode}
          onChange={handleChange}
          required
        />

        <select
          name="facultyId"
          className="form-control mb-3"
          value={subject.facultyId}
          onChange={handleChange}
          required
        >
          <option value="">Select Faculty</option>
          {facultyList.map((faculty) => (
            <option key={faculty.id} value={faculty.id}>
              {faculty.name} - {faculty.department}
            </option>
          ))}
        </select>

        <button type="submit" className="btn btn-primary">
          Save Subject
        </button>
      </form>

      {message && <p className="mt-3">{message}</p>}
    </div>
  );
}

export default AddSubject;