import axios from "axios";

const BASE_URL = "http://localhost:8085/subjects";

export const addSubject = (subject) => {
  return axios.post(BASE_URL, subject);
};

export const getAllSubjects = () => {
  return axios.get(BASE_URL);
};