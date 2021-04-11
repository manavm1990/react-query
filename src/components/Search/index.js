import { Input } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function Search({ handler, value }) {
  return (
    <Input
      placeholder="Search Pokémon"
      size="xs"
      w={36}
      onChange={handler}
      value={value}
    />
  );
}

Search.propTypes = {
  handler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
