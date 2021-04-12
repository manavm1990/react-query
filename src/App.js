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

  function handleClick() {
    setIsVisible(prev => !prev);
  }

  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl">
        <Grid p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <QueryClientProvider client={qc}>
            <Button w={12} size="sm" onClick={handleClick}>
              {isVisible ? 'Hide' : 'Show'}
            </Button>
            {isVisible ? <List headerTxt="Pokémon" endpoint="pokemon" /> : null}
            <Box borderTop="1px" borderColor="gray.200" mt="4" pt="4">
              <List headerTxt="Berries" endpoint="berry" />
            </Box>

            <Box borderTop="1px" borderColor="gray.200" mt="4" pt="4">
              <Search handler={handleChange} value={searchTerm} />
            </Box>

            {searchTerm ? (
              <Box borderTop="1px" borderColor="gray.200" mt="4" pt="4">
                <Figure searchTerm={`${searchTerm}`} />
              </Box>
            ) : null}

            <ReactQueryDevtools />
          </QueryClientProvider>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}
