import ky from 'ky';
import { useQuery } from 'react-query';

export default function useBerries() {
  return useQuery(
    'berries',
    () => {
      // if (true) throw new Error('Fake Error ❕');

      return new Promise(resolve => setTimeout(resolve, 1000))
        .then(() => ky.get('https://pokeapi.co/api/v2/berry/').json())
        .then(({ results }) => results);
    },
    { refetchOnWindowFocus: false, staleTime: 50000 },
  );
}
