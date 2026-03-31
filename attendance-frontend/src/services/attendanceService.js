import axios from "axios";

const BASE_URL = "http://localhost:8085/attendance";

export const markAttendance = (attendance) => {
  return axios.post(BASE_URL, attendance);
};

export const getAllAttendance = () => {
  return axios.get(BASE_URL);
};