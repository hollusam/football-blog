import axios from 'axios';

const apiKey = '6510c0ff4a75454b80dde25e3936bd5c'; // Replace with your actual API key
const baseURL = 'https://api.football-data.org/v2';

const api = axios.create({
  baseURL,
  headers: {
    'X-Auth-Token': apiKey,
  },
});

export const getArticles = () => api.get('/articles');
export const getNews = () => api.get('/news');
export const getLiveScores = () => api.get('/matches/live');
export const getFixtures = () => api.get('/matches');
export const getTeamInfo = (teamId) => api.get(`/teams/${teamId}`);
