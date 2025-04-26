import axios from 'axios';

const API_URL = 'http://localhost:5000/api/feedback';

export const submitFeedback = (feedbackData) => axios.post(API_URL, feedbackData);

export const fetchFeedback = (filters = {}) => {
    const query = new URLSearchParams(filters).toString();
    return axios.get(`${API_URL}?${query}`);
};
