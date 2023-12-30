import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // Replace with your API server URL
});

export const getArticles = () => api.get('/articles');
export const getNews = () => api.get('/news');
export const getLiveScores = () => api.get('/live-scores');
