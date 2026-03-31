import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
    role: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8085/auth/login", loginData);

      if (response.data === "Login successful") {
        localStorage.setItem("role", loginData.role);
        localStorage.setItem("username", loginData.username);

        if (loginData.role === "FACULTY") {
          navigate("/faculty-dashboard");
        } else if (loginData.role === "STUDENT") {
          navigate("/student-dashboard");
        }
      } else {
        setMessage(response.data);
      }
    } catch (error) {
      setMessage("Login failed");
      console.error(error);
    }
  };

  return (
    <div className="mt-5">
      <h2 className="text-center">Login</h2>

      <form onSubmit={handleLogin} className="w-25 mx-auto mt-4">
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          className="form-control mb-3"
          value={loginData.username}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter password"
          className="form-control mb-3"
          value={loginData.password}
          onChange={handleChange}
          required
        />

        <select
          name="role"
          className="form-control mb-3"
          value={loginData.role}
          onChange={handleChange}
          required
        >
          <option value="">Select Role</option>
          <option value="STUDENT">Student</option>
          <option value="FACULTY">Faculty</option>
        </select>

        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>

        {message && <p className="text-danger mt-3">{message}</p>}
      </form>
    </div>
  );
}

export default Login;