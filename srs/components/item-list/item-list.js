import React from 'react';
import {FlatList} from 'react-native';
import {withData} from '../hoc-helpers/with-data';
import ListItem from '../list-item/list-item';
import SwapiService from '../../services/swapi-service';
const swapi = new SwapiService();

const List = props => {
  const selectData = () => {
    switch (props.filter) {
      case 'characters':
        return swapi.getAllPeople;
      case 'planets':
        return swapi.getAllPlanets;
      case 'starships':
        return swapi.getAllStarships;
    }
  };
  const Comp = withData(ItemList, selectData(), props);
  return <Comp />;
};

const ItemList = ({data, getId, filter}) => {
  const renderItem = ({item}) => {
    getId(item.id);
    return <ListItem name={item.name} filter={filter} id={item.id} />;
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default List;
