import React, {useMemo, useContext} from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {buttons} from '../buttons/buttons';
import {swContext} from '../../screens/main-screen';
const Filter = ({onFilter}) => {
  const {filter} = useContext(swContext);
  const renderedButtons = useMemo(() => {
    return buttons.map(({name, image}) => {
      const isActive = filter === name;
      const isActiveStyle = isActive ? {tintColor: 'red'} : null;
      const onFilterToggle = () => {
        onFilter(name);
      };

      return (
        <TouchableOpacity
          key={name}
          activeOpacity={0.5}
          onPress={onFilterToggle}>
          <View style={styles.button}>
            <Image source={image} style={{...styles.image, ...isActiveStyle}} />
          </View>
        </TouchableOpacity>
      );
    });
  }, [filter, onFilter]);

  return <View style={styles.constainer}>{renderedButtons}</View>;
};

export default Filter;

const styles = StyleSheet.create({
  constainer: {
    margin: 5,
    marginTop: 8,
    height: 35,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'rgba(78, 71, 74, 0.5)',

    borderRadius: 3,
    borderColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 48,
  },
  activeButton: {
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'red',
    paddingHorizontal: 48,
  },
  image: {
    width: 30,
    height: 30,
    tintColor: 'white',
    marginVertical: 2,
  },
  activeImage: {
    width: 30,
    height: 30,
    tintColor: 'red',
    marginVertical: 2,
  },
});
