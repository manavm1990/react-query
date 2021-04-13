import { Input } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function Search({ setSearchTerm, value }) {
  return (
    <Input
      placeholder="Search Pokémon"
      size="xs"
      w={36}
      onChange={event => {
        setSearchTerm(event.target.value);
      }}
      value={value}
    />
  );
}

Search.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
