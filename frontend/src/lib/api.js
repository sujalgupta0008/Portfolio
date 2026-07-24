import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API = `${BACKEND_URL}/api`;

export const submitContact = (payload) => axios.post(`${API}/contact`, payload);
export const fetchGithubProfile = () => axios.get(`${API}/github/profile`);
export const resumeDownloadUrl = `${API}/resume/download`;
