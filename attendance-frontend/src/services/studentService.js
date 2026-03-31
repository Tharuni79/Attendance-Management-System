import axios from "axios";

const BASE_URL = "http://localhost:8085/students";

export const addStudent = (student) => {
  return axios.post(BASE_URL, student);
};

export const getAllStudents = () => {
  return axios.get(BASE_URL);
};