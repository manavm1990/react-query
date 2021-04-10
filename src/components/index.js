import { ListItem, UnorderedList } from '@chakra-ui/react';
import ky from 'ky';
import { useQuery } from 'react-query';

export default function Test() {
  const { data, status, error, isFetching } = useQuery(
    'pokemon',
    () => {
      // if (true) throw new Error('Fake Error ❕');

      return new Promise(resolve => setTimeout(resolve, 1000))
        .then(() => ky.get('https://pokeapi.co/api/v2/pokemon/').json())
        .then(({ results }) => results);
    },
    { refetchOnWindowFocus: false, staleTime: 50000 },
  );

  switch (status) {
    case 'loading':
      return <p>⏳</p>;
    case 'error':
      return <p>Error! {error.message}</p>;
    case 'fetching':
      return <p>Fetching...</p>;
    default:
      return (
        <>
          {isFetching ? <p>Updating...</p> : null}
          <UnorderedList>
            {
              // Optional chaining not required with conditional rendering 🤓
              data.map((d, index) => (
                <ListItem key={index}>{d.name}</ListItem>
              ))
            }
          </UnorderedList>
        </>
      );
  }
}
