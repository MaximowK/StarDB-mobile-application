import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import RandomPlanet from '../random-planet/random-planet';
import Filter from '../filter/filter';

const AppHeader = ({onFilter}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/background-image/stars.png')}
        style={styles.backgroundImage}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>STAR</Text>
          <Text style={styles.textSecond}>WARS</Text>
        </View>
        <RandomPlanet />
        <Filter onFilter={onFilter} />
      </ImageBackground>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 250,
    backgroundColor: 'black',
    display: 'flex',
  },
  title: {
    fontSize: 50,
    color: 'white',
    opacity: 1,
    alignSelf: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    marginTop: 2,
  },
  text: {
    color: 'white',
    fontSize: 40,
  },
  textSecond: {
    color: 'white',
    fontSize: 40,
    marginTop: -15,
  },
});
