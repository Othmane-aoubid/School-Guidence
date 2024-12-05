import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const getUserProfile = async () => {
  const response = await axios.get(`${API_URL}/user-profile`);
  return response.data;
};

export const getCareerRecommendations = async () => {
  const response = await axios.get(`${API_URL}/career-recommendations`);
  return response.data;
};

export const getPersonalityAnalysis = async () => {
  const response = await axios.get(`${API_URL}/personality-analysis`);
  return response.data;
};

export const getRecommendedCourses = async () => {
  const response = await axios.get(`${API_URL}/recommended-courses`);
  return response.data;
};

export const submitInterestSurvey = async (surveyData) => {
  const response = await axios.post(`${API_URL}/submit-survey`, surveyData);
  return response.data;
};
