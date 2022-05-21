import React from 'react';
import {Text, StyleSheet} from 'react-native';

export const PersonDetails = ({data}) => {
  return (
    <React.Fragment>
      <Text style={styles.field}>Gender: {data.gender}</Text>
      <Text style={styles.field}>Birth Year: {data.birthYear}</Text>
      <Text style={styles.field}>Eye Color: {data.eyeColor}</Text>
      <Text style={styles.field}>Height: {data.height}</Text>
      <Text style={styles.field}>Hair Color: {data.hairColor}</Text>
    </React.Fragment>
  );
};
export const PlanetDetails = ({data}) => {
  return (
    <React.Fragment>
      <Text style={styles.field}>Population: {data.population}</Text>
      <Text style={styles.field}>Rotation Period: {data.rotationPeriod}</Text>
      <Text style={styles.field}>Diameter: {data.diameter}</Text>
      <Text style={styles.field}>Orbital Period: {data.orbitalPeriod}</Text>
      <Text style={styles.field}>Climate: {data.climate}</Text>
    </React.Fragment>
  );
};
export const StarsipDetails = ({data}) => {
  return (
    <React.Fragment>
      <Text style={styles.field}>Model: {data.model}</Text>
      <Text style={styles.field}>Cost: {data.costInCredits}</Text>
      <Text style={styles.field}>Length: {data.length}</Text>
      <Text style={styles.field}>Cargo: {data.cargoCapacity}</Text>
      <Text style={styles.field}>Crew: {data.crew}</Text>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
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
