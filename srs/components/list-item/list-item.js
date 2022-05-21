import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useRef} from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';

export default React.memo(function ListItem({name, filter, id}) {
  const navigationRef = useRef(useNavigation());
  const handleNavigate = useCallback(() => {
    navigationRef.current.navigate('ItemScreen', {filter, id});
  }, [navigationRef, filter, id]);
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={handleNavigate}>
      <View style={styles.container}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(78, 71, 74, 0.5)',
    marginHorizontal: 15,
    marginVertical: 5,
    height: 50,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: 32,
    paddingHorizontal: 10,
  },
});
