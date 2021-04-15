import { Box, Image, Text } from '@chakra-ui/react';
import { useData } from 'hooks';
import PropTypes from 'prop-types';

export default function Figure({ searchTerm, dispatch }) {
  const { data, status, error, isFetching } = useData({
    qk: ['search', searchTerm],

    // ⚠️ Must send over some `endpoint` to set query up even if it's disabled
    endpoint: searchTerm ? `pokemon/${searchTerm}` : 'pokemon',
    enabled: Boolean(searchTerm),
    retryDelay: 1000,
  });

  switch (status) {
    case 'loading':
      return <Text>⏳</Text>;
    case 'error':
      return <Text>💩 {error.message}</Text>;
    default:
      // 😕 Still 'success' even if not enabled
      const src = data?.sprites?.front_default;
      return (
        <>
          <Box boxSize="sm">
            <Image src={src} alt={searchTerm} />
          </Box>

          {isFetching ? <p>Checking for updates...</p> : null}
        </>
      );
  }
}

Figure.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};
