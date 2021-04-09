import { Box, ChakraProvider, Grid, theme } from '@chakra-ui/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Test from './components';
import './index.css';

export default function App() {
  const qc = new QueryClient();

  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <QueryClientProvider client={qc}>
            <Test />
          </QueryClientProvider>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}
