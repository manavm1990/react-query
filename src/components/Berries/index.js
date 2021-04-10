import { ListItem, UnorderedList } from '@chakra-ui/react';
import { BaseHeader } from 'components/base';
import { useData } from 'hooks';

export default function Berries() {
  const { data, status, error } = useData('berry');

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
          <BaseHeader txt="Berries" endpoint="berry"></BaseHeader>
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
