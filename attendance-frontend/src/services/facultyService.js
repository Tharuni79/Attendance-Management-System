import axios from "axios";

const BASE_URL = "http://localhost:8085/faculty";

export const addFaculty = (faculty) => {
  return axios.post(BASE_URL, faculty);
};

export const getAllFaculty = () => {
  return axios.get(BASE_URL);
};