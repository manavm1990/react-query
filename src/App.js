import { Box, Button, ChakraProvider, Grid, theme } from '@chakra-ui/react';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Figure, List, Search } from './components';
import './index.css';

export default function App() {
  const qc = new QueryClient();
  const [isVisible, setIsVisible] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  function handleChange({ target: { value } }) {
    setSearchTerm(() => value);
  }

  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl">
        <Grid p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Button
            w={12}
            size="sm"
            onClick={() => {
              setIsVisible(prev => !prev);
            }}
          >
            {isVisible ? 'Hide' : 'Show'}
          </Button>
          <QueryClientProvider client={qc}>
            {isVisible ? <List headerTxt="Pokémon" endpoint="pokemon" /> : null}
            <Box borderTop="1px" borderColor="gray.200" mt="4" pt="4">
              <List headerTxt="Berries" endpoint="berry" />
            </Box>

            <Box borderTop="1px" borderColor="gray.200" mt="4" pt="4">
              <Search handler={handleChange} value={searchTerm} />
            </Box>

            <Box borderTop="1px" borderColor="gray.200" mt="4" pt="4">
              <Figure searchTerm={`${searchTerm}`} />
            </Box>

            <ReactQueryDevtools />
          </QueryClientProvider>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}
