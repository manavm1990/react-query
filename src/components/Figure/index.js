import { Box, Image, Text } from '@chakra-ui/react';
import { useData } from 'hooks';
import PropTypes from 'prop-types';

export default function Figure({ searchTerm }) {
  const { data, status, error } = useData(`pokemon/${searchTerm}`);

  switch (status) {
    case 'loading':
      return <Text>⏳</Text>;
    case 'error':
      return <Text>💩 {error.message}</Text>;
    default:
      const src = data.sprites.front_default;
      return (
        <Box boxSize="sm">
          <Image src={src} alt={searchTerm} />
        </Box>
      );
  }
}

Figure.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};
