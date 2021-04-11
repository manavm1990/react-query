import { ListItem, UnorderedList } from '@chakra-ui/react';
import { BaseHeader } from 'components/base';
import { useData } from 'hooks';

export default function Berries() {
  const { data, isSuccess } = useData('berry');

  return (
    <>
      <BaseHeader txt="Berries" endpoint="berry"></BaseHeader>
      {isSuccess ? (
        <UnorderedList>
          {
            // Optional chaining not required with conditional rendering 🤓
            data.map((d, index) => (
              <ListItem key={index}>{d.name}</ListItem>
            ))
          }
        </UnorderedList>
      ) : null}
    </>
  );
}
