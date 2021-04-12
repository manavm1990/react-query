import ky from 'ky';
import { useQuery } from 'react-query';

// Using `react-query` defaults whenever possible
export default function useData({
  qk,
  endpoint = qk,
  enabled = true,
  retry = 3,
} = {}) {
  return useQuery(
    qk,
    () => {
      // if (true) throw new Error('Fake Error ❕');

      return new Promise(resolve => setTimeout(resolve, 1000)).then(() =>
        ky.get(`https://pokeapi.co/api/v2/${endpoint}/`).json(),
      );
    },
    { refetchOnWindowFocus: false, staleTime: 50000, enabled, retry },
  );
}
