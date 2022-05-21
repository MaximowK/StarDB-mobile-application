import React, {useMemo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {withDataFilter} from '../hoc-helpers/with-data-filter';
import {
  PersonDetails,
  PlanetDetails,
  StarsipDetails,
} from '../sw-components-details/sw-components-details';

const ItemDetails = ({data, filter}) => {
  const content = useMemo(() => {
    switch (filter) {
      case 'characters':
        return <PersonDetails data={data} />;
      case 'planets':
        return <PlanetDetails data={data} />;
      case 'starships':
        return <StarsipDetails data={data} />;
    }
  }, [filter]);
  return (
    <View style={styles.container}>
      <Text style={styles.fieldTitle}>{data.name}</Text>
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 5, marginVertical: 10, marginHorizontal: 20},
  fieldTitle: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center',
    borderBottomWidth: 1,
  },
  field: {
    fontSize: 20,
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 2,
    backgroundColor: 'black',
    borderRadius: 5,
    margin: 2,
  },
});
export default withDataFilter(ItemDetails);
