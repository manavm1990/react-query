import { ListItem, UnorderedList } from '@chakra-ui/react';
import { usePokemon } from 'hooks';

export default function Table() {
  const { data, status, error, isFetching } = usePokemon();

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