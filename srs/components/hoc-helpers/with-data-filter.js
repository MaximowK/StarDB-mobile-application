import React, {useMemo, useState, useEffect} from 'react';
import SwapiService from '../../services/swapi-service';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import ErrorIndicator from '../error-indicator/error-indicator';

export const withDataFilter = Comp => {
  return props => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const swapi = useMemo(() => new SwapiService(), []);
    const getData = useMemo(() => {
      switch (props.filter) {
        case 'characters':
          return swapi.getPerson;
        case 'planets':
          return swapi.getPlanet;
        case 'starships':
          return swapi.getStarship;
      }
    }, [swapi, props.filter]);
    useEffect(() => {
      getData(props.id)
        .then(res => {
          setData(res);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
          setError(true);
        });
    }, [getData, props.id]);
    const content = useMemo(() => {
      if (loading) {
        return <ActivityIndicator size="large" color="red" />;
      }
      if (error) {
        return <ErrorIndicator />;
      }
      return <Comp data={data} {...props} />;
    }, [loading, error]);
    return <View style={styles.container}>{content}</View>;
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
