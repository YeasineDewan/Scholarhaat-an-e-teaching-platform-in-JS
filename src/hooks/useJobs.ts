import { useQuery } from 'react-query';
import { fetchJobs } from '../api';

export const useJobs = (page = 1, filters = {}) => {
  return useQuery(['jobs', page, filters], () => fetchJobs(page, filters), {
    keepPreviousData: true,
    onError: (error) => {
      console.error('Failed to fetch jobs:', error);
    }
  });
};
