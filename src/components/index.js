import { ListItem, UnorderedList } from '@chakra-ui/react';
import ky from 'ky';
import { useQuery } from 'react-query';

export default function Test() {
  const { data } = useQuery('pokemon', () =>
    ky
      .get('https://pokeapi.co/api/v2/pokemon/')
      .json()
      .then(({ results }) => results)
  );

  return (
    <UnorderedList>
      {
        // Optional chaining `loading` state
        data?.map((d, index) => (
          <ListItem key={index}>{d.name}</ListItem>
        ))
      }
    </UnorderedList>
  );
}