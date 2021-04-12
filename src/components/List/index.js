import { ListItem, UnorderedList } from '@chakra-ui/react';
import { BaseHeader } from 'components/base';
import { useData } from 'hooks';
import PropTypes from 'prop-types';

export default function List({ headerTxt, endpoint }) {
  const { data, isSuccess } = useData(endpoint);

  return (
    <>
      <BaseHeader txt={headerTxt} endpoint={endpoint}></BaseHeader>
      {isSuccess ? (
        <UnorderedList>
          {data.results.map((d, index) => (
            <ListItem key={index}>{d.name}</ListItem>
          ))}
        </UnorderedList>
      ) : null}
    </>
  );
}

List.propTypes = {
  headerTxt: PropTypes.string.isRequired,
  endpoint: PropTypes.string,
};
