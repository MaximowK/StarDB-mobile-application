import React, {useState, useEffect, useMemo} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import SwapiService from '../../services/swapi-service';
import ErrorIndicator from '../error-indicator/error-indicator';
import PlanetView from '../planet-view/planet-view';

const RandomPlanet = ({updateInterval = 3000}) => {
  const swapiService = new SwapiService();

  const [planet, setPlanet] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const onPlanetLoaded = item => {
    setPlanet(item);
    setLoading(false);
    setError(false);
  };

  const onError = () => {
    setError(true);
    setLoading(false);
  };
  const updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 2;
    swapiService.getPlanet(id).then(onPlanetLoaded).catch(onError);
  };
  useEffect(() => {
    updatePlanet();
    const interval = setInterval(updatePlanet, updateInterval);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const content = useMemo(() => {
    if (loading) {
      return <ActivityIndicator size="large" color="red" />;
    }
    if (error) {
      return <ErrorIndicator />;
    }
    return <PlanetView planet={planet} />;
  }, [loading, error, planet]);

  return <View style={styles.container}>{content}</View>;
};

export default RandomPlanet;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    height: 110,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'rgba(78, 71, 74, 0.5)',
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
  },
});
