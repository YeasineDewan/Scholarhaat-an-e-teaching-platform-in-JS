import { useQuery } from 'react-query';
import { fetchTutors } from '../api';

export const useTutors = (category = 'all') => {
  return useQuery(['tutors', category], () => fetchTutors(category), {
    onError: (error) => {
      console.error('Failed to fetch tutors:', error);
    }
  });
};
