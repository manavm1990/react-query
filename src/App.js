import { Box, Button, ChakraProvider, Grid, theme } from '@chakra-ui/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Main } from './components';
import './index.css';

export default function App() {
  const qc = new QueryClient();
  const [isVisible, setIsVisible] = React.useState(true);

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
            {isVisible ? <Main headerTxt="Pokémon" endpoint="pokemon" /> : null}
            <Box borderTop="1px" borderColor="gray.200" mt="4" pt="4">
              <Main headerTxt="Berries" endpoint="berry" />
            </Box>
            <ReactQueryDevtools />
          </QueryClientProvider>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}
