import React, {useState, useEffect, useMemo} from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import ErrorIndicator from '../error-indicator/error-indicator';

export const withData = (Comp, getData, props) => {
  return () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
      getData()
        .then(res => {
          setData(res);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
          setError(true);
        });
    }, []);

    const content = useMemo(() => {
      if (loading) {
        return <ActivityIndicator size="large" color="red" />;
      }
      if (error) {
        return <ErrorIndicator />;
      }
      return <Comp data={data} {...props} />;
    }, [loading, error, data]);
    return <View style={styles.container}>{content}</View>;
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
