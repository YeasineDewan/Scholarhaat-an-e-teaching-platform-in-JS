import { useQuery } from 'react-query';
import { fetchStats } from '../api';

export const useStats = () => {
  return useQuery('stats', fetchStats, {
    onError: (error) => {
      console.error('Failed to fetch statistics:', error);
    }
  });
};
