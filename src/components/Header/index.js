import { Heading } from '@chakra-ui/react';
import { useData } from 'hooks';

export default function Header() {
  const { data, isSuccess } = useData('pokemon');

  return (
    <Heading as="h1" size="4xl">
      There are {isSuccess ? data.length : 0} Pokémon
    </Heading>
  );
}
