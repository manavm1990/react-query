import { Heading } from '@chakra-ui/react';
import { usePokemon } from 'hooks';

export default function Header() {
  const { data, isSuccess } = usePokemon();

  return (
    <Heading as="h1" size="4xl">
      There are {isSuccess ? data.length : 0} Pokémon
    </Heading>
  );
}
