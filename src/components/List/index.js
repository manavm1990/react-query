import { Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import { useData } from 'hooks';
import PropTypes from 'prop-types';

export default function List({ headerTxt, endpoint }) {
  const { data, isSuccess } = useData({ qk: endpoint });

  return isSuccess ? (
    <>
      <Heading as="h1" size="4xl">
        There are {data.results.length} {headerTxt}
      </Heading>
      <UnorderedList>
        {data.results.map((d, index) => (
          <ListItem key={index}>{d.name}</ListItem>
        ))}
      </UnorderedList>
    </>
  ) : null;
}

List.propTypes = {
  headerTxt: PropTypes.string.isRequired,
  endpoint: PropTypes.string,
};
