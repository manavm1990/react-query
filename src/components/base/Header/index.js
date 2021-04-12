import { Heading } from '@chakra-ui/react';
import { useData } from 'hooks';
import PropTypes from 'prop-types';

export default function Header({ txt, endpoint }) {
  const { data, status, error, isFetching } = useData(
    endpoint || txt.toLowerCase(),
  );

  switch (status) {
    case 'loading':
      return <p>⏳</p>;
    case 'error':
      return <p>Error! {error.message}</p>;
    default:
      return (
        <Heading as="h1" size="4xl">
          {isFetching ? <p>Updating...</p> : null}
          There are {data.results.length} {txt}
        </Heading>
      );
  }
}

Header.propTypes = {
  txt: PropTypes.string.isRequired,
  endpoint: PropTypes.string,
};

Header.defaultProps = { endpoint: '' };
