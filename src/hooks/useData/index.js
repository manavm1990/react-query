import ky from 'ky';
import { useQuery } from 'react-query';

// Using `react-query` defaults whenever possible
export default function useData({
  qk,
  endpoint = qk,
  enabled = true,
  retry = 3,
  retryDelay = attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
} = {}) {
  return useQuery(
    qk,
    () => {
      const controller = new AbortController();
      const signal = controller.signal;

      const results = ky
        .get(`https://pokeapi.co/api/v2/${endpoint}/`, { signal })
        .json();

      // `cancel` is used by React Query
      results.cancel = () => controller.abort();

      return results;
    },
    { enabled, retry },
  );
}
