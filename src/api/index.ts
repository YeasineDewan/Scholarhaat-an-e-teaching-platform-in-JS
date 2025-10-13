import axios from 'axios';
// Import mock data
import { mockStats, mockCategories, mockJobs, mockTutors, mockAuth } from './mockData';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance with base URL
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add interceptor to include auth token in requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Modified API endpoints to use mock data
export const fetchStats = async () => {
  // Return mock data instead of making an actual API call
  return Promise.resolve(mockStats);
};

export const fetchCategories = async () => {
  // Return mock data instead of making an actual API call
  return Promise.resolve(mockCategories);
};

export const fetchJobs = async (page = 1, filters = {}) => {
  // Return mock data with pagination
  return Promise.resolve({
    ...mockJobs,
    page
  });
};

export const fetchTutors = async (category = 'all') => {
  // Return mock data instead of making an actual API call
  return Promise.resolve(mockTutors);
};

export const login = async (credentials) => {
  // Return mock auth data
  return Promise.resolve(mockAuth);
};

export const register = async (userData) => {
  // Return mock auth data
  return Promise.resolve(mockAuth);
};

export default api;
