import { Heading } from '@chakra-ui/react';
import { useData } from 'hooks';
import PropTypes from 'prop-types';

export default function Header({ txt, endpoint }) {
  const { data, isSuccess } = useData(endpoint || txt.toLowerCase());

  return (
    <Heading as="h1" size="4xl">
      There are {isSuccess ? data.length : 0} {txt}
    </Heading>
  );
}

Header.propTypes = {
  txt: PropTypes.string.isRequired,
  endpoint: PropTypes.string,
};

Header.defaultProps = { endpoint: '' };
