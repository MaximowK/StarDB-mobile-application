import React from 'react';
import {View, Image, Text, StyleSheet, ActivityIndicator} from 'react-native';

const PlanetView = ({planet}) => {
  return (
    <React.Fragment>
      <View style={styles.imageBox}>
        <Image
          source={{
            uri: `https://starwars-visualguide.com/assets/img/planets/${planet.id}.jpg`,
          }}
          style={styles.image}
        />
        <ActivityIndicator
          size="large"
          color="red"
          style={{position: 'absolute'}}
        />
      </View>
      <View style={styles.textBox}>
        <Text style={styles.fieldTitle}>{planet.name}</Text>
        <Text
          style={
            styles.fieldInfo
          }>{`Rotation period: ${planet.rotationPeriod}`}</Text>
        <Text style={styles.fieldInfo}>{`Diameter: ${planet.diameter}`}</Text>
        <Text
          style={styles.fieldInfo}>{`Population: ${planet.population}`}</Text>
      </View>
    </React.Fragment>
  );
};

export default PlanetView;

const styles = StyleSheet.create({
  imageBox: {
    width: 100,
    marginLeft: 20,
    marginVertical: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBox: {
    width: '100%',
    flex: 1,
  },
  fieldTitle: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 30,
  },
  fieldInfo: {
    fontSize: 15,
    color: 'white',
    marginLeft: 10,
  },
  image: {
    width: 100,
    height: 105,
    position: 'absolute',
    zIndex: 1,
  },
});
