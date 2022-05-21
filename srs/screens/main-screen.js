import React, {useState, useRef, useCallback} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import AppHeader from '../components/app-header/app-header';
import List from '../components/item-list/item-list';

export const swContext = React.createContext();
const MainScreen = () => {
  const [filter, setFilter] = useState('characters');
  const idRef = useRef();
  const onFilterChange = useCallback(filt => {
    setFilter(filt);
  }, []);
  const getId = id => {
    idRef.current = id;
  };

  return (
    <swContext.Provider value={{id: idRef, filter}}>
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={false} backgroundColor="black" />
        <AppHeader style={styles.header} onFilter={onFilterChange} />
        <List filter={filter} getId={getId} />
      </SafeAreaView>
    </swContext.Provider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default MainScreen;
