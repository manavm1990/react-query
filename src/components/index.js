import { ListItem, UnorderedList } from '@chakra-ui/react';
import ky from 'ky';
import { useQuery } from 'react-query';

export default function Test() {
  const { data, status } = useQuery('pokemon', () =>
    // Simulate some lag
    new Promise(resolve => setTimeout(resolve, 1000))
      .then(() => ky.get('https://pokeapi.co/api/v2/pokemon/').json())
      .then(({ results }) => results)
  );

  switch (status) {
    case 'loading':
      return <p>⏳</p>;
    default:
      return (
        <UnorderedList>
          {
            // Optional chaining not required with conditional rendering 🤓
            data.map((d, index) => (
              <ListItem key={index}>{d.name}</ListItem>
            ))
          }
        </UnorderedList>
      );
  }
}
